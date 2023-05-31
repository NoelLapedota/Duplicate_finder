const fs = require("fs-extra");
const FileImporter = require("./controller/copyFilesjs");
const trasformToHash = require("./controller/hashPhotos");




const importFile = new FileImporter("./photo", "./duplicate");

// Import files from the source directory to the destination directory
importFile.importFiles().then(() => {
  const convertToHash = new trasformToHash("./duplicate", "./goodPhotos");
  
  // Convert files in the duplicate directory to hash values
  convertToHash.convert().then((data) => {
    convertToHash.hasDuplicates(data);
  });
});