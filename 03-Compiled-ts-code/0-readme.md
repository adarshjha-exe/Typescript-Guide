# 3. Compiling TypeScript Code and Comparing the Compiled JavaScript Code

### 1. Compare the Output
- Opens both the `.ts` (TypeScript) and `.js` (JavaScript) files.
- **Observations:**
- Type annotations (e.g., `:number`, `:string`) are removed in JavaScript.
- Only valid JavaScript remains in the output file.
- If there are TypeScript-specific features (like interfaces or type errors), they're removed or reported during compilation.