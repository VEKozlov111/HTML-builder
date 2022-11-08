const fs = require('fs');
const path = require('path');
fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
  console.log(files)
  if (err)
    console.log(err);
  else {
    for (let i = 0; i < files.length; i++) {
      fs.stat(`03-files-in-folder/secret-folder/${files[i]}`, function (err, stats) {
        if (err) { throw err; }
        if (stats.isFile() == true) {
          let est = path.extname(`03-files-in-folder/secret-folder/${files[i]}`);
          let name2 = files[i].replace(est, "");
          let bytes = stats.size;
          let el = `${name2} - ${est.slice(1)} - ${bytes} B`;
          console.log(el);
        }
      })
    }
  }
});



