const FileImporter = require('./FileImporter');
const fs = require('fs-extra');


const Hash = require('./Hash');
const fs = require('fs-extra');

describe('convert()', () => {
    it('should convert files in the source directory to their corresponding hash values', async () => {
      // Mock the fs.readdir function to return a sample content array
      jest.spyOn(fs, 'readdir').mockImplementation((path, options, callback) => {
        const content = ['file1.jpg', 'file2.jpg', 'file3.jpg'];
        callback(null, content);
      });
  
      // Mock the imageHash function to return a sample hash value
      jest.spyOn(imageHash, 'hash').mockImplementation((filePath, hashSize, options, callback) => {
        const hashValue = 'sampleHashValue';
        callback(null, hashValue);
      });
  
  
  
      // Verify the result
      expect(result).toEqual({
        'file1.jpg': 'sampleHashValue',
        'file2.jpg': 'sampleHashValue',
        'file3.jpg': 'sampleHashValue'
      });
  
   
    });
  
  });
  

  describe('hasDuplicates()', () => {
    it('should move duplicate files from the source directory to the destination directory', async () => {
      
      // Create a sample dict object with duplicate values
      const dict = {
        file1: 'hash1',
        file2: 'hash2',
        file3: 'hash1' // Duplicate hash value
      };

      // Call the hasDuplicates() method
      describe('hasDuplicates()', () => {
        it('should move duplicate files from the source directory to the destination directory', async () => {
          // Mock the fs.move function to simulate moving files
          jest.spyOn(fs, 'move').mockImplementation((source, destination) => {
            // Simulate the move operation
            console.log(`Moving file from ${source} to ${destination}`);
          });
      
          // Create a new instance of Hash with the mock values
          const hashInstance = new Hash("./duplicate", "./goodPhotos");
      
          // Create a sample dict object with duplicate values
          const dict = {
            file1: 'hash1',
            file2: 'hash2',
            file3: 'hash1' // Duplicate hash value
          };
      
          // Call the hasDuplicates() method
          await hashInstance.hasDuplicates(dict);
      
        
      
      
          fs.move.mockRestore();
        });
      
      });
      
    });

  });



