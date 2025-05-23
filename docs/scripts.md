
# NPM Scripts Documentation

This document explains the available npm scripts in this project and how to use them.

## Available Scripts

### Development Scripts

#### `npm run dev`

Starts the development server with hot-reloading enabled.

```bash
npm run dev
```

**Parameters:**
- `--port`: Change the port (default: 8080)
- `--host`: Set the host (default: "::")

**Example with custom port:**
```bash
npm run dev -- --port=3000
```

#### `npm run build`

Builds the app for production to the `dist` folder.

```bash
npm run build
```

**Parameters:**
- `--mode`: Build mode (default: "production")

**Example with staging mode:**
```bash
npm run build -- --mode=staging
```

#### `npm run preview`

Locally preview the production build.

```bash
npm run preview
```

**Parameters:**
- `--port`: Change the port (default: 5000)

### Code Quality Scripts

#### `npm run lint`

Lints the codebase using ESLint.

```bash
npm run lint
```

**Parameters:**
- `--fix`: Automatically fix problems

**Example with auto-fixing:**
```bash
npm run lint -- --fix
```

#### `npm run typecheck`

Type-checks the codebase using TypeScript.

```bash
npm run typecheck
```

### Test Scripts

#### `npm run test`

Runs tests using Vitest.

```bash
npm run test
```

**Parameters:**
- `--watch`: Watch mode
- `--coverage`: Generate coverage report

**Example with watch mode:**
```bash
npm run test -- --watch
```

#### `npm run test:e2e`

Runs end-to-end tests with Playwright.

```bash
npm run test:e2e
```

**Parameters:**
- `--headed`: Run in headed mode

### CI/CD Scripts

#### `npm run ci`

Runs the full CI pipeline locally (lint, typecheck, test).

```bash
npm run ci
```

#### `npm run deploy`

Builds and deploys the application.

```bash
npm run deploy
```

**Parameters:**
- `--environment`: Target environment (staging/production)

**Example deploying to staging:**
```bash
npm run deploy -- --environment=staging
```

## Custom Script Props

Here are the TypeScript types for the props used by the custom scripts:

```typescript
// Build Script Props
interface BuildProps {
  mode?: "development" | "production" | "staging";
  minify?: boolean;
  sourcemap?: boolean;
  analyze?: boolean;
}

// Dev Server Props
interface DevServerProps {
  port?: number;
  host?: string;
  https?: boolean;
  open?: boolean;
}

// Deploy Props
interface DeployProps {
  environment: "staging" | "production";
  skipTests?: boolean;
  skipBuild?: boolean;
  createRelease?: boolean;
}

// Test Props
interface TestProps {
  watch?: boolean;
  coverage?: boolean;
  ui?: boolean;
  testNamePattern?: string;
  updateSnapshots?: boolean;
}
```

## Script Execution Order

For the default development workflow:

1. **Development**: `npm run dev`
2. **Testing**: `npm run test`
3. **Building**: `npm run build`
4. **Deployment**: `npm run deploy`

## Continuous Integration

The CI pipeline runs the following scripts in order:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`

This ensures that code quality is maintained before deployment.
