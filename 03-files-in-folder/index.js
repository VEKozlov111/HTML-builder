const fs = require('fs');
const path = require('path');
const a = fs.readdirSync('03-files-in-folder/secret-folder', { withFileTypes: true });


for (let i = 0; i < a.length; i++) {
  if (a[i].isFile() == true) {
    let name = a[i].name;
    let bytes;
    let est = path.extname(`03-files-in-folder/secret-folder/${name}`);
    let name2 = name.replace(est, "");
    fs.stat(`03-files-in-folder/secret-folder/${name}`, function (err, stats) {
      if (err) { throw err; }
      bytes = stats.size;
      let el = `${name2} - ${est.slice(1)} - ${bytes} B`;
      console.log(el);
    })
  }
}
