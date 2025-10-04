# 15. TypeScript Compiler Using Watch Mode

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
