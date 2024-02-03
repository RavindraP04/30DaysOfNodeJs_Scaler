const { execSync } = require("child_process");

const executeCommand = (command) => {
  try {
    const result = execSync(command, { encoding: "utf-8" });
    console.log(`Command Output:\n${result}`);
    console.log(`Command executed successfully`);
  } catch (error) {
    console.error(`Error executing command: ${error.stderr}`);
    console.error(`Command failed with code ${error.status}`);
  }
};

executeCommand("cat ../day02_fileWriter/message.txt");
executeCommand("start Chrome https://github.com/RavindraP04");
