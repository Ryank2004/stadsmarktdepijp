# Workflow

## Branching Strategy

We follow a simplified Feature Branch Workflow:

- `main`: stable production code
- `dev`: integration branch for upcoming release
- `feature/*`, `fix/*`, `chore/*`: short-lived branches created from `dev`

### Naming conventions
- `feature/hero-section-#issue`
- `fix/navbar-padding-#issue`
- `chore/dependency-updates-#issue`

### Workflow
1. Create feature branches from `dev`
2. Open a pull request into `dev` when feature is complete
3. Merge `dev` into `main` when a full version is ready
4. Tag releases on `main` as `vX.X.X`

### Pull Request
When merging a branch, always use the PR template which you automatically get.

Please make sure you follow the following rules:

* Write small PR's
* Review your own PR first
* Provide context and guidance

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

## Documentation

### Changelog
In the change log (CHANGELOG.md) notable changes in a project are documented on a daily basis. Notable changes can be; new features, bug fixes, and updates. It helps developers track the project's progress over time.

### Worklog
In the work log (WORKLOG.md), daily progress is documented. Each entry contains two parts:

1. What I did — a brief summary of the tasks completed that day.
2. What needs to happen first — the next logical task or priority for the upcoming work session.

This structure ensures continuity between work sessions and allows you (or others) to immediately pick up where you left off.
Example:

```md
## 2025-08-21

**What I did:**
- Finished styling for the hero section
- Fixed the scroll snapping issue on mobile

**What needs to happen first:**
- Test the contact form on multiple devices
- Optimize image loading for performance
```

# Code

## HTML

HTML Conventions
* Use structured and semantic HTML
Stick to semantic elements like <header>, <main>, <section>, <article>, and <footer> where appropriate. Avoid unnecessary <div> wrappers.
* Avoid deep nesting
Keep the HTML hierarchy shallow and clear. Avoid deeply nested <section> elements and maintain logical heading levels (e.g., don’t use <h4> inside a section that starts with an <h2>).
* Leverage native HTML features
Use built-in HTML functionality like required, type="email", pattern, etc., especially in forms. It reduces reliance on JavaScript and improves accessibility.
* Use tabs for indentation
Use 1 tab per indentation level. Do not use spaces.
* Use double quotes for attributes
Always wrap attribute values in double quotes. For example:
```html
<input type="text" name="email" placeholder="Enter your email">
```
* Link only when necessary
When additional context is needed, link to relevant external sources instead of overloading the current page.

## CSS Conventions
### General Guidelines
* Use 1 tab for indentation
Consistent indentation improves readability and team collaboration.
* Follow HTML structure order in your CSS
Write CSS selectors in the same logical order as the HTML elements appear in your markup.
* Structure from generic to specific
Start with broad styles and gradually move to specific overrides and components.
* Leverage the cascade and inheritance
Use utility classes and shared styles where possible to keep your code DRY (Don’t Repeat Yourself).
* Use `kebab-case` for class and ID names
Example: `.main-header`, `#product-card`.
Use single quotes in `content` values
✅ `style*="button-"`
❌ `style*='button-'`

### Pseudo-Private Custom Properties
Use pseudo-private custom properties (prefixed with `_` or similar) to encapsulate component-specific values. This results in modular, compact, and easily maintainable styles.
Combine with CSS nesting for maximum clarity and control.
Example:
```css
button {
  --_opacity: 1;
  --_brdr-color: var(--gold-neutral);
  --_bg-color: var(--gold-lightest);
  --_color: var(--gold-darkest);

  border: 3px solid var(--_brdr-color);
  background: var(--_bg-color);
  color: var(--_color);
  opacity: var(--_opacity);

  &:hover,
  &:focus-visible {
    --_brdr-color: var(--green-darkest);
    --_bg-color: var(--green-lightest);
    --_color: var(--green-darkest);
  }
}
```

### Root Styling & Design System Variables
Use the `:root` selector to define global design tokens that form the foundation of your design system. These include color palettes, spacing units, typography scales, border radii, shadows, and other reusable design values.
This approach ensures visual consistency, easier theming, and simplifies maintenance across the entire codebase.

Recommendations:
Define color variables using HSL for flexibility in lightness/saturation.
Create scale-based tokens for spacing, font sizes, and border radii.
Use semantic naming (`--color-primary`, `--space-xs`, etc.) to abstract away implementation details.

Example:
```css
:root {
  /* Color base */
  --gold-h: 51;
  --gold-s: 100%;

  --darkest: 15%;
  --dark: 30%;
  --neutral: 50%;
  --light: 70%;
  --lightest: 90%;

  --color-gold-darkest: hsl(var(--gold-h), var(--gold-s), var(--darkest));
  --color-gold-neutral: hsl(var(--gold-h), var(--gold-s), var(--neutral));
  --color-gold-lightest: hsl(var(--gold-h), var(--gold-s), var(--lightest));

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;

  /* Typography */
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;

  /* Borders */
  --radius-sm: 4px;
  --radius-lg: 12px;
}
```

Use these variables consistently in your components to build a maintainable and scalable design system.

### Responsive Design
* Use container queries for width-based layout changes (e.g. component-based responsiveness).
* Use media queries for user preferences (e.g. dark mode), device capabilities, or broader breakpoints.

## JavaScript
### Generic
* 1 tab – for indentation.
* Single quotes for strings
* Use comments to explain complicated code
* Don't use semi colons at the end of a line

### Preferred coding style

Use a consistent structure for code for each scope taking advantage of the JavaScript principle hoisting:
```js
// 1. declare all variables for the specific scope



// 2. all code logic



// 3. function declarations 
```
### Use template literals where possible instead of string concatenation

Template literals are a way to create strings in JavaScript using backticks (`) instead of regular quotes. They make it easier to include variables and expressions in a string without using string concatenation (+).
u
1. se backticks for strings with variables or expressions
```js
// Bad
const name = 'Bob';
const message = 'Hello ' + name + ', welcome!';

// Good
const name = 'Bob';
const message = `Hello ${name}, welcome!`;
```
2. Use template literals for dynamic expressions:
```js
const user = 'Alice';
const items = 5;

// Bad
const summary = user + ' has ' + items + ' items in their cart.';

// Good
const summary = `${user} has ${items} items in their cart.`;
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
```
### Object destructuring

Use object destructuring when assigning object properties:

The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
```js
// Bad
const name = person.name;
const age = person.age;

// Good
const { name, age } = person;
```
```js
 <!-- Bad -->
<h2>{person.name}</h2>
<p>{person.age}</p>

<!-- Good -->
<h2>{name}</h2>
<p>{age}</p>
```

### When to use const, let and var

Always use `const` unless you need to reassign the variable.

Use `const` by default

Use `const` for all variables that should not be reassigned. This makes the code more predictable and prevents accidental modifications.
```js
// example
const MAX_USERS = 100;
const apiUrl = "https://example.com/api";

// Bad
var message = "Hello";

// Good
const message = "Hello";
Use let when reassignment is necessary
```

Use `let` only when the value of the variable changes after initialization.
```js
// Bad
const count = 0;
count = 1; // Error: Assignment to constant variable

// Good
let count = 0;
count = 1;
```

Avoid using `var`

`va`r has function scope and can be redeclared, which can lead to unexpected bugs due to hoisting. Avoid using it unless necessary.
```js
// Bad
var name = "Alice";

// Good
const name = "Alice";
```
Extra considerations

Use `const` for objects and arrays, even if their contents change
The reference remains the same but properties or elements can be modified.
```js
const user = { name: "John" };
user.age = 25; // Allowed

const numbers = [1, 2, 3];
numbers.push(4); // Allowed
```

# Astro Conventions
## Data
* Always fetch and manipulate data in `src/pages/*.astro` or `*.mdx` using `Astro.fetchContent()` or `await fetch(...)` in the frontmatter.
* When dynamic server logic is needed, use API routes `(src/pages/api/)` or server-side functions inside the frontmatter (between `---`).
* Keep all data transformation server-side where possible, and pass only clean, typed data to your components.

## Routes & Page Components
* Each `*.astro` file inside `src/pages/` is a route and should function as a compositional shell, importing smaller UI components.
* Only perform light logic in `.astro` files: fetch data, destructure it, and pass it down into components.
* 
Never mix layout logic and presentational logic directly in route files.
Example:
```astro
---
// src/pages/index.astro
import { getHomepageData } from '@/lib/data.js'
import HeroSlider from '@/components/organisms/HeroSlider.astro'
import SlideCards from '@/components/organisms/SlideCards.astro'
import HomeCampus from '@/components/organisms/HomeCampus.astro'
import Agenda from '@/components/organisms/Agenda.astro'
import HomePartners from '@/components/organisms/HomePartners.astro'

const data = await getHomepageData()
const { hero, slides, campus, agenda, partners } = data
---

<HeroSlider {...hero} />
<SlideCards {...slides} />
<HomeCampus {...campus} />
<Agenda {...agenda} />
<HomePartners {...partners} />
```

### Components
Use object destructuring inside component props to keep your templates clean:
```astro
---
// HeroSlider.astro
const { title, subtitle, backgroundImage } = Astro.props
```

- Pass only the **minimum required props** to each component.

- Avoid **deeply nested component structures** – max 3 levels deep.

- Use **clear, meaningful names** for components, functions, variables, and CSS classes.

- Keep `.astro` components **lean and logic-free** — split up into **molecules**, **organisms**, or **layouts** following Atomic Design principles.

```astro
**Example:**
```astro
---
// src/pages/program.astro
import Semesters from '@/components/organisms/Semesters.astro'
import Program from '@/components/molecules/Program.astro'

const { title, subtitle, content, semesters } = Astro.props
---

<Program title={title} content={content} />
<Semesters semesters={semesters} subtitle={subtitle} />
```

### CSS
* Avoid using `:global` unless strictly necessary.
* Prefer pseudo-private custom properties (`--_name`) for component-scoped theming.
* Place shared styles in a global CSS file and import it in your src/layouts/BaseLayout.astro or `src/components/Layout.astro`.
* Use CSS Nesting via PostCSS if needed, but keep nesting shallow and scoped.