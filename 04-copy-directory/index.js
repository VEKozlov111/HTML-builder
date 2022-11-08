console.log('Не могу понять почему, отсидел уже часа 4 над этим таском, но файлы иногдадобавляются не с первого раза буду признателен если вы подскажете мне в дискорде')

const fs = require('fs');
const path = require('path');

function copyDir() {

  fs.mkdir(path.join('04-copy-directory', 'files-copy'), { recursive: true }, (err) => {
    if (err) {
    }
  });
  fs.readdir('04-copy-directory/files-copy', { recursive: true }, (err, fil) => {
    if (err) throw err;

    if (fil.length != 0) {
      for (const fi of fil) {
        fs.unlink(path.join('04-copy-directory/files-copy', fi), (err) => {
          if (err) throw err;
        });
      };
    };
  });


  fs.readdir('04-copy-directory/files', { recursive: true }, (err, files) => {

    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.open(`04-copy-directory/files-copy/${files[i]}`, 'w+', (err) => {
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
