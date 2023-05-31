const { imageHash } = require("image-hash");
const fs = require("fs-extra");


class Hash {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
  
    convert() {
      return new Promise((resolve, reject) => {
        fs.readdir(this.from, "utf-8", (err, content) => {
          if (err) {
            reject(err);
          } else {
            const promises = {};
  
            // Iterate over the files in the directory
            for (let i = 0; i < content.length; i++) {
              const currentFile = content[i];
  
              const promise = new Promise((resolve, reject) => {
                imageHash(
                  this.from + "/" + currentFile,
                  16,
                  true,
                  (error, data) => {
                    if (error) {
                      reject(error);
                    } else {
                      resolve(data);
                    }
                  }
                );
              });
  
              // Store the promise in the promises object with the current file as the key
              promises[currentFile] = promise;
            }
  
            Promise.all(Object.values(promises))
              .then(() => {
                const dict = {};
  
                // Iterate over the files in the directory again
                for (let i = 0; i < content.length; i++) {
                  const currentFile = content[i];
                  const promiseName = currentFile;
                  const promise = promises[promiseName];
  
                  promise.then((data) => {
                    dict[promiseName] = data;
                  });
                }
  
                resolve(dict); // Resolve the promise with the dict object
              })
              .catch((error) => {
                reject(error);
              });
          }
        });
      });
    }
  
    async hasDuplicates(dict) {
      const hashArray = Object.values(dict);
      const duplicateValues = hashArray.filter((value, index) => {
        return hashArray.indexOf(value) !== index;
      });
  
      if (duplicateValues.length > 0) {
        duplicateValues.forEach(async (element) => {
          let count = 0;
  
          for (let key in dict) {
            if (dict[key] === element) {
              const copyFileSync = await fs.move(
                this.from + "/" + key,
                this.to + "/" + key
              );
              count += 1;
            }
          }
  
          console.log(`They have been moved n° ${count} Photo/S`);
        });
      }
    }
  }
  

module.exports = Hash;
