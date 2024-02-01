const fs = require("fs");

function readFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err.message}`);
    } else {
      console.log(`File content of ${filePath}:\n${data}`);
    }
  });
}

const filePath = "./message.txt";
readFileContent(filePath);
