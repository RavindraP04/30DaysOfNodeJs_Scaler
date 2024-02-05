const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    const actualExtension = path.extname(filePath);

    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}

checkFileExtension('../day04_resolvePath/day04_resolvePath.js', '.txt');

checkFileExtension('../day04_resolvePath/day04_resolvePath.md', '.md');
