const FileImporter = require('./FileImporter');
const fs = require('fs-extra');


describe('FileImporter', () => {
   
    it('should import files from the source directory to the destination directory', async () => {
      // Create an instance of FileImporter with appropriate values for the test
      const fileImporter = new FileImporter("./photo", "./duplicate");
  
      // Execute the importFiles() method
      await fileImporter.importFiles();
  
    });
  
  
  

  
  });
  