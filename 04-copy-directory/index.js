const fs = require('fs');
const path = require('path');

function copyDir() {
  fs.mkdir(path.join('04-copy-directory', 'files-copy'), (err) => {
    if (err) {
    }
  });

  fs.readdir('04-copy-directory/files-copy', (err, files) => {
    if (err) throw err;
    if (files.length != 0) {
      for (const file of files) {
        fs.unlink(path.join('04-copy-directory/files-copy', file), (err) => {
          if (err) throw err;
        });
      };
    };
  });

  fs.readdir('04-copy-directory/files', (err, files) => {
    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.open(`04-copy-directory/files-copy/${files[i]}`, 'w', (err) => {
          if (err) { console.log('создание файла'); }
        });
        fs.readFile(`04-copy-directory/files/${files[i]}`, 'utf8', readingFile);
        function readingFile(error, data) {
          if (error) {
            console.log('чтение файла');;
          } else {
            fs.writeFile(`04-copy-directory/files-copy/${files[i]}`, data, 'utf8', writeFile);
            function writeFile(error) {
              if (error) { console.log('копирование файла ') }
            }
          }
        }
      }
    }
  }
  )
}
copyDir()
