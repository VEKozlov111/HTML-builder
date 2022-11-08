const fs = require('fs');
const path = require('path');

function bundle() {

  /*fs.unlink('05-merge-styles/project-dist/bundle.css', (err) => {
    if (err) throw err;

    console.log('Deleted');
  });*/



  fs.open('05-merge-styles/project-dist/bundle.css', 'w+', (err, fd) => {
    if (err) console.log('файл создан');

  })


  fs.readdir('05-merge-styles/styles', { recursive: true }, (err, files) => {
    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.stat(`05-merge-styles/styles/${files[i]}`, function (err, stats) {
          if (err) { throw err; }
          let est = path.extname(`05-merge-styles/styles/${files[i]}`);
          if (est == '.css') {

            console.log(files[i])
            fs.readFile(`05-merge-styles/styles/${files[i]}`, 'utf8', readingFile);
            function readingFile(error, data) {
              if (error) {
                console.log('чтение файла');;
              } else {
                fs.appendFile('05-merge-styles/project-dist/bundle.css', data, 'utf8', writeFile);
                function writeFile(error) {
                  if (error) { console.log('копирование файла ') }
                }
              }
            }



          }
        })
      }
    }
  })
}
bundle()