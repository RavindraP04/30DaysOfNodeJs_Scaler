const fs = require("fs");

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
    } else {
      console.log(`Data written to ${filePath}`);
    }
  });
}

writeToFile("./message.txt", "This message is being written using writeFile");
writeToFile(
  "../day01_readFile/message.txt",
  "Content in a non-existent folder."
);
