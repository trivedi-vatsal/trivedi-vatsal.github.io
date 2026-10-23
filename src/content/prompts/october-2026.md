Scan this repo with the advisory payload at the end of this prompt. If a newer payload is attached after this prompt, use that payload instead of the default one.

Author every commit as the identity in the payload. Set it for that commit only (`git -c user.name=... -c user.email=...`). Do not change git config. Before opening a pull request, verify the pushed commit's author and committer are that name and email, and that GitHub attributes the commit to that account.

Push and open pull requests as the GitHub account that owns the repo. If the active `gh` account gets a 403, switch to the account that can push, do the push and pull requests, then switch the active account back.

## What to scan

The workspace may be a folder of repos. A directory with its own `.git` is a repo. Scan each repo that deploys. Do not treat the folder as one repo, and do not invent a git repo at the workspace root.

For each repo:

1. `git fetch --all --prune`, then list `git ls-remote --heads origin` and the default branch (`origin/HEAD`).
2. Read deploy config: GitHub workflows, Dockerfiles, compose files, Helm, Kubernetes, fly.toml, render.yaml, railway, Procfile, app specs, and package-manager files.
3. A long-lived deploy branch is a branch the repo actually builds or deploys from. Count the default branch when a workflow deploys on push to it. Count any other branch named in a deploy workflow, release branch, or environment branch. Decide from the repo. Do not assume the names `prod` or `develop`.
4. Do not count these as deploy sources unless a deploy workflow really builds from them: `gh-pages` and other publish-output branches, `dependabot/*`, feature branches, agent branches, and open pull-request branches.

## How to change it

Open one pull request per deploy branch. Do not combine branches into one pull request.

Branch from the remote tip of that base (`git checkout -B FIX origin/BASE`). Do not branch from a stale local checkout. Push with an explicit refspec to the fix branch (`git push -u origin HEAD:FIX`). Never push to the base branch.

If two deploy branches have the same lockfile, cherry-pick the lockfile commit. If the lockfiles differ, repeat the audit on each branch.

## Node.js

Use the patched releases in the payload. Node 20 and older have no fix.

Search every place that selects the runtime: Dockerfile stages, compose `image:` lines, `.nvmrc`, `.node-version`, `actions/setup-node`, other workflow `node-version` inputs, `engines.node`, devcontainers, and Nix.

Image rule, applied to every stage, including the app image and any worker target:

- Already on Node 26: pin `26.12.1` (or the payload's 26.x release).
- Already on Node 24: pin `24.22.1`. Use `node:24.22.1-alpine` only in this case.
- On Node 22 below the patched 22.x release, or on Node 20 or older, or on a floating tag (`node:20`, `node:latest`, `node:22`): pin `22.23.4`. For an image, use `node:22.23.4-alpine` when the current tag is alpine or has no OS variant.
- If the current image is not alpine (`slim`, `bookworm`, Debian), bump only the version and keep that variant. Do not switch the base OS.
- If the repo has no Dockerfile and no image, do not create one. Pin the CI version, `.nvmrc`, or other selector that actually builds the repo.

## PHP

Search for a PHP runtime, `composer.json`, `composer.lock`, a PHP image, or `.php-version`.

If none of those exist, say so and do not add PHP. If they exist, bump to the payload's patched release on the same major line, in the same pull request as the Node.js change for that branch.

## npm audit

Run `npm audit` only on a branch that has `package-lock.json`.

Run `npm audit fix` without `--force`. Reuse the install flags this repo already uses (`.npmrc`, CI, Docker), such as `--legacy-peer-deps`.

Commit lockfile updates that stay inside the current `package.json` ranges. Do not rewrite direct dependency specifiers. Do not take `npm audit fix --force`.

If a finding remains only because a parent pins an old transitive and a same-major patched release exists, add an npm override to that patched release. Honor the payload's special cases. In particular, `postcss-selector-parser` is vulnerable below 7.1.6, so override it to 7.1.6, not 6.1.5.

Do not apply a fix on the payload's do-not-apply list. That includes Prisma 6 to 7, OpenTelemetry auto-instrumentations 0.78 to 0.82, `braces` (no official patch), and an `eslint-config-next` downgrade.

If the branch uses pnpm or Yarn and has no `package-lock.json`, do not create one. Apply the same override rule with that package manager's override field, and refresh its lockfile. Do not run an update that rewrites direct ranges.

## Pull request body

For each pull request, list:

- what was patched (runtime pins and lockfile packages)
- what is still open, and why (no same-major release, outside the current range, on the do-not-apply list, or no lockfile for npm)
- images: if this repo builds an app image and any worker image, say both need a rebuild after merge. If it has no image, say there is no app image and no worker image to rebuild, and that the next deploy run has to use the patched runtime.

## Report back

End with the pull request URLs, the deploy branches you kept, the branches you rejected and why, and anything you refused to invent (PHP, Docker, a lockfile, a major upgrade).

---

## Advisory payload (October 21, 2026)

Replace this section when a later security release is the one to scan for.

- Author name: your-github-login
- Author email: you@example.com

### Node.js

Source: https://nodejs.org/en/blog/vulnerability/october-2026-security-releases

Patched releases: 22.23.4, 24.22.1, 26.12.1. Node 20 and older get no fix.

High severity issues named for this scan:

- CVE-2026-111497, Brotli decoder out-of-bounds write. Affects 26.x, 24.x, 22.x. https://www.cve.org/CVERecord?id=CVE-2026-111497
- CVE-2026-105482, DNS NUL truncation. Affects 26.x, 24.x, 22.x. https://www.cve.org/CVERecord?id=CVE-2026-105482
- CVE-2026-105483, TLS hostname bypass with fullwidth digits. Affects 26.x and 24.x. https://www.cve.org/CVERecord?id=CVE-2026-105483
- CVE-2026-106069, TLS hostname bypass for non-canonical IPs. Affects 26.x, 24.x, 22.x. https://www.cve.org/CVERecord?id=CVE-2026-106069

The release also fixes CVE-2026-105481, CVE-2026-106072, CVE-2026-106074, CVE-2026-106070, CVE-2026-106071, and CVE-2026-106073. Pinning the patched release covers those too.

### PHP

Source: https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/

Patched releases, same major line only: 8.5.12, 8.4.27, 8.3.36, 8.2.35.

- CVE-2026-109618, RCE via OOM corruption. https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w and https://www.cve.org/CVERecord?id=CVE-2026-109618
- CVE-2026-109619, RCE via stale global state. https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp and https://www.cve.org/CVERecord?id=CVE-2026-109619

### npm do-not-apply

- Prisma 6 to 7
- OpenTelemetry auto-instrumentations 0.78 to 0.82
- `braces`: no official patch
- `eslint-config-next` downgrade suggested by audit: wrong, do not take it
- `postcss-selector-parser`: vulnerable below 7.1.6. Override to 7.1.6, not 6.1.5
