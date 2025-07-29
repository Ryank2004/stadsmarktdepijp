## Branching Strategy

We follow a simplified Feature Branch Workflow:

- `main`: stable production code
- `develop`: integration branch for upcoming release
- `feature/*`, `fix/*`, `chore/*`: short-lived branches created from `develop`

### Naming conventions
- `feature/hero-section`
- `fix/navbar-padding`
- `chore/dependency-updates`

### Workflow
1. Create feature branches from `develop`
2. Open a pull request into `develop` when feature is complete
3. Merge `develop` into `main` when a full version is ready
4. Tag releases on `main` as `vX.X.X`

## Commit Strategy

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard to keep commit history clean, structured, and machine-readable. This allows for automated changelogs, better collaboration, and clearer project tracking.

### ✅ Format

```bash
<type>(<scope>): short summary
```

- Use **present tense** and be **imperative**: "add", not "added" or "adds"
- Keep the summary under 72 characters
- Optionally add a longer description after a blank line

### 🎯 Commit Types

| Type      | Purpose                                      |
|-----------|----------------------------------------------|
| `feat`    | A new feature                                |
| `fix`     | A bug fix                                    |
| `chore`   | Tooling, setup, or dependency changes        |
| `docs`    | Documentation updates only                   |
| `style`   | Visual changes only (CSS, layout, spacing)   |
| `refactor`| Code changes that don’t affect functionality |
| `test`    | Adding or updating tests                     |

### 🧩 Scope

The scope describes the part of the project being changed. Keep it short and relevant.

Examples:
- `feat(nav): add mobile dropdown`
- `fix(header): correct padding issue`
- `chore(setup): install Astro framework`

### 🔁 Commit Rules

- Commit **small, logical changes** separately (don't bundle unrelated work)
- Use `git add -p` to stage partial changes if needed
- Avoid "WIP" commits on main branches — use them temporarily in feature branches only
- Always commit from a named branch (e.g. `feature/booking-flow`), never directly to `main` or `develop`

### 📦 Examples

```bash
chore(setup): install Astro with default template
```

Used the official starter. No additional packages added yet.

```bash
feat(hero): add animated title using GSAP
```

```bash
fix(nav): make hamburger menu work on mobile
```
