# 2. Installing TypeScript Compiler in the Project and System, Compiling the ts file with tsc command

## Installation Steps

### 1. Install TypeScript Compiler Globally
- Open the terminal or command prompt.
- Run the following command to install TypeScript globally:
```ts
npm install -g typescript
```
- This command installs the TypeScript compiler on your system, making the `tsc` command available everywhere.


### 2. Install TypeScript Compiler Locally in a Project ( preferred )
- Navigate to your project folder in the terminal.
- Run this command to install TypeScript as a project dependency:
```ts
npm install --save-dev typescript
```
- This adds TypeScript to your project's `node_modules` and allows project-specific compiler configuration.


## Compiling TypeScript Files

### Using the `tsc` Command
- After installation, you can compile a `.ts` (TypeScript) file into JavaScript by running:
```ts
tsc filename.ts
```

- This produces a `filename.js` file in the same directory.
