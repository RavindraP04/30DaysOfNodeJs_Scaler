const path = require("path");

function resolvePath(relativePath) {
  const currentDir = process.cwd();

  const absolutePath = path.resolve(currentDir, relativePath);

  console.log("Resolved Path:", absolutePath);
}

// Test Cases
resolvePath("../day03_execCmd/day03_execCmd.js");
resolvePath("problem_statement.md");
