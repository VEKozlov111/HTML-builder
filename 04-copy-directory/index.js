const fs = require('fs');
const path = require('path');



function copyDir() {

  fs.mkdir(path.join('04-copy-directory', 'files-copy'), (err) => {
    if (err) {

    }
  });

  fs.readdir('04-copy-directory/files', (err, files) => {
    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.open(`04-copy-directory/files-copy/${files[i]}`, 'w', (err) => {
          if (err) throw err;
        });
        fs.readFile(`04-copy-directory/files/${files[i]}`, 'utf8', readingFile);
        function readingFile(error, data) {
          if (error) {
            console.log(error);
          } else {
            fs.writeFile(`04-copy-directory/files-copy/${files[i]}`, data, 'utf8', writeFile);
            function writeFile(error) {
              if (error) { console.log(error) }
            }
          }
        }
      }
    }
  }
  )
}
copyDir()
