# TypeScript Compiler Using Watch Mode

- **Watch Mode:**  
  Automatically recompiles affected files when you save changes—no need to rerun the command manually.

## How to Use Watch Mode

- **Single File:**
  > tsc js/main.ts --watch
- **or short form**:

  > tsc js/main.ts -w

- The compiler enters watch mode and recompiles `main.ts` whenever you make changes.

- **Multiple Files/Whole Project:**

1. **Initialize TypeScript project**:
   ```
   tsc --init
   ```
   - Creates a `tsconfig.json` configuration file for your project.
   - Place this file at the root folder (not in subfolders).
2. **Run the compiler in watch mode on the project**:
   ```
   tsc --watch
   ```
   or
   ```
   tsc -w
   ```
   - Compiler reads all `.ts` files indicated in `tsconfig.json` and watches for changes.
   - Automatically compiles all files

## Key Commands Summary

| Task                         | Command Example           |
| ---------------------------- | ------------------------- |
| Watch single file            | `tsc filename.ts --watch` |
| Watch single file (short)    | `tsc filename.ts -w`      |
| Compile whole project (init) | `tsc --init`              |
| Watch whole project          | `tsc --watch` or `tsc -w` |

---

# Include and Exclude `.ts` Files with `tsconfig.json`

## Usage of `tsconfig.json`

- **`tsconfig.json`** is created with `tsc --init` and placed at your project root.
- You use it to configure compiler options and determine which files TypeScript should process.

## `include` Option

- Lists files or folders to be included in the compilation.
- Example:

```
{
"include": ["src/**/", "utils/"]
}
```

- This tells TypeScript to compile all `.ts` files in the `src` and `utils` directories.

## `exclude` Option

- Lists files or folders to be excluded from compilation.
- Example:

```
{
"exclude": ["node_modules", "test", "dist"]
}
```

- Prevents TypeScript from compiling files in `node_modules`, `test`, and `dist`.

## Practical Tips

- By default, `node_modules` is excluded.

---

# Setting Up the Compilation Target to ES5

- **Older browsers** may only support ES5, not ES6/ES2015 features (like arrow functions, `let`/`const`, etc.).
- You may want to use modern TypeScript features but run your code on environments with different JavaScript support levels.

## How to Set the Target

1. Open your project's `tsconfig.json` file.
2. Find or add the `target` option in the root configuration object.
3. Example:

```
{
"compilerOptions": {
"target": "es5"
}
}
```

- This will tell TypeScript to compile your code down to ES5-compatible JavaScript.

- You can set the target to various values, including:
- `"es5"`
- `"es6"` or `"es2015"`
- `"es2016"`, `"es2017"`, etc.

---

# Understanding TypeScript Core Libs in the `tsconfig.json` File

## What Are TypeScript Core Libs?

- **Core libs** are TypeScript definitions for JavaScript environments (e.g., ECMAScript standards, browser APIs).
- Common lib options:
  - `"ES5"`, `"ES6"`, `"ES2015"`, `"DOM"`, `"DOM.Iterable"`, `"WebWorker"`, etc.
- These define the APIs, objects, and methods your TypeScript code recognizes.

## How to Configure `lib` in `tsconfig.json`

- Example setup:

  ```
  {
  "compilerOptions": {
  "lib": ["ES6", "DOM"]
  }
  }
  ```

- Includes ES6 features and DOM types (browser APIs like `document`, `window`).

## Why Use the `lib` Option?

- Controls which JavaScript and browser types are available.
- Prevents using APIs not available in your runtime environment.
- Helps with targeting specific platforms (e.g., Node.js vs Browser).

## Practical Tips

- If targeting browser code, add `"DOM"` (for interfaces like `document`, `window`, etc.).
- For Node.js, you might skip `"DOM"` and include only ECMAScript versions.
- Combine multiple libs for projects needing wider compatibility.
