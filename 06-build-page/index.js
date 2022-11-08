const fs = require('fs');
const path = require('path');
const util = require("util");


//создание папки
function createDir() {
  fs.mkdir(path.join('06-build-page', 'project-dist'), { recursive: true }, (err) => {
    if (err) {
    }
  });
}

//Создание Html 
function createHtmlFile() {
  fs.open('06-build-page/project-dist/index.html', 'w+', (err, fd) => {
    if (err) console.log('файл создан');

  })
}

//Создание Css 
function creatCssFile() {
  fs.open('06-build-page/project-dist/style.css', 'w+', (err, fd) => {
    if (err) console.log('файл создан');

  })
}


//Бандл Css
function bundllCss() {
  fs.readdir('06-build-page/styles', { recursive: true }, (err, files) => {
    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.stat(`06-build-page/styles/${files[i]}`, function (err, stats) {
          if (err) { throw err; }
          let est = path.extname(`06-build-page/styles/${files[i]}`);
          if (est == '.css') {

            console.log(files[i])
            fs.readFile(`06-build-page/styles/${files[i]}`, 'utf8', readingFile);
            function readingFile(error, data) {
              if (error) {
                console.log('чтение файла');;
              } else {
                fs.appendFile('06-build-page/project-dist/style.css', data, 'utf8', writeFile);
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

//Создание папки assets 
function createDirAssets() {
  fs.mkdir(path.join('06-build-page', 'project-dist', 'assets'), { recursive: true }, (err) => {
    if (err) {
    }
  });
}

//Создание папки fonts 
function createDirFonts() {
  fs.mkdir(path.join('06-build-page', 'project-dist', 'assets', 'fonts'), { recursive: true }, (err) => {
    if (err) {
    }
  });
}

//Создание папки img
function createDirImg() {
  fs.mkdir(path.join('06-build-page', 'project-dist', 'assets', 'img'), { recursive: true }, (err) => {
    if (err) {
    }
  });
}

//Создание папки svg 
function createDirSvg() {
  fs.mkdir(path.join('06-build-page', 'project-dist', 'assets', 'svg'), { recursive: true }, (err) => {
    if (err) {
    }
  });
}


//копирование Fonts
function copyFonts() {

  fs.readdir('06-build-page/project-dist/assets/fonts', { recursive: true }, (err, fil) => {
    if (err) throw err;

    if (fil.length != 0) {
      for (const fi of fil) {
        fs.unlink(path.join('06-build-page/project-dist/assets/fonts', fi), (err) => {
          if (err) throw err;
        });
      };
    };
  });

  fs.readdir('06-build-page/assets/fonts', { recursive: true }, (err, files) => {

    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.open(`06-build-page/project-dist/assets/fonts/${files[i]}`, 'w+', (err) => {
          if (err) { console.log('создание файла'); }
        });
        fs.readFile(`06-build-page/assets/fonts/${files[i]}`, 'utf8', readingFile);
        function readingFile(error, data) {
          if (error) {
            console.log('чтение файла');;
          } else {
            fs.writeFile(`06-build-page/project-dist/assets/fonts/${files[i]}`, data, 'utf8', writeFile);
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

//копирование img
function copyImg() {

  fs.readdir('06-build-page/project-dist/assets/img', { recursive: true }, (err, fil) => {
    if (err) throw err;

    if (fil.length != 0) {
      for (const fi of fil) {
        fs.unlink(path.join('06-build-page/project-dist/assets/img', fi), (err) => {
          if (err) throw err;
        });
      };
    };
  });

  fs.readdir('06-build-page/assets/img', { recursive: true }, (err, files) => {

    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.open(`06-build-page/project-dist/assets/img/${files[i]}`, 'w+', (err) => {
          if (err) { console.log('создание файла'); }
        });
        fs.readFile(`06-build-page/assets/img/${files[i]}`, 'utf8', readingFile);
        function readingFile(error, data) {
          if (error) {
            console.log('чтение файла');;
          } else {
            fs.writeFile(`06-build-page/project-dist/assets/img/${files[i]}`, data, 'utf8', writeFile);
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

//копирование svg
function copySvg() {

  fs.readdir('06-build-page/project-dist/assets/svg', { recursive: true }, (err, fil) => {
    if (err) throw err;

    if (fil.length != 0) {
      for (const fi of fil) {
        fs.unlink(path.join('06-build-page/project-dist/assets/svg', fi), (err) => {
          if (err) throw err;
        });
      };
    };
  });

  fs.readdir('06-build-page/assets/svg', { recursive: true }, (err, files) => {

    if (err)
      console.log(err);
    else {
      for (let i = 0; i < files.length; i++) {
        fs.open(`06-build-page/project-dist/assets/svg/${files[i]}`, 'w+', (err) => {
          if (err) { console.log('создание файла'); }
        });
        fs.readFile(`06-build-page/assets/svg/${files[i]}`, 'utf8', readingFile);
        function readingFile(error, data) {
          if (error) {
            console.log('чтение файла');;
          } else {
            fs.writeFile(`06-build-page/project-dist/assets/svg/${files[i]}`, data, 'utf8', writeFile);
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

//Шаблонный тег articles
function getArticles() {
  fs.readFile('06-build-page/template.html', { encoding: 'utf8' }, function (err, data) {
    if (err) return console.log(err);
    let a;
    fs.readFile('06-build-page/components/articles.html', { encoding: 'utf8' }, function (err, dat) {
      if (err) return console.log(err);

      var formatted = data.replace(/{{articles}}/g, `${dat}`);
      fs.writeFile('06-build-page/template.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
        fs.readFile('06-build-page/template.html', { encoding: 'utf8' }, function (err, data) {
          if (err) return console.log(err);
          let a;
          fs.readFile('06-build-page/components/footer.html', { encoding: 'utf8' }, function (err, dat) {
            if (err) return console.log(err);

            var formatted = data.replace(/{{footer}}/g, `${dat}`);
            fs.writeFile('06-build-page/template.html', formatted, 'utf8', function (err) {
              if (err) return console.log(err);
              fs.readFile('06-build-page/template.html', { encoding: 'utf8' }, function (err, data) {
                if (err) return console.log(err);
                let a;
                fs.readFile('06-build-page/components/header.html', { encoding: 'utf8' }, function (err, dat) {
                  if (err) return console.log(err);

                  var formatted = data.replace(/{{header}}/g, `${dat}`);
                  fs.writeFile('06-build-page/template.html', formatted, 'utf8', function (err) {
                    if (err) return console.log(err);
                    fs.readFile('06-build-page/template.html', 'utf8', readingFile);
                    function readingFile(error, data) {
                      if (error) {
                        console.log('чтение файла');;
                      } else {
                        fs.writeFile('06-build-page/project-dist/index.html', data, 'utf8', writeFile);
                        function writeFile(error) {
                          if (error) { console.log('копирование файла ') }
                        }
                      }
                    }
                    fs.readFile('06-build-page/template.html', { encoding: 'utf8' }, function (err, data) {
                      if (err) return console.log(err);
                      let a;
                      fs.readFile('06-build-page/components/about.html', { encoding: 'utf8' }, function (err, dat) {
                        if (err) return;

                        var formatted = data.replace(/{{about}}/g, `${dat}`);
                        fs.writeFile('06-build-page/template.html', formatted, 'utf8', function (err) {
                          if (err) return console.log(err);
                          fs.readFile('06-build-page/template.html', 'utf8', readingFile);
                          function readingFile(error, data) {
                            if (error) {
                              console.log('чтение файла');;
                            } else {
                              fs.writeFile('06-build-page/project-dist/index.html', data, 'utf8', writeFile);
                              function writeFile(error) {
                                if (error) { console.log('копирование файла ') }
                              }
                            }
                          }
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

//Шаблонный тег footer
function getFooter() {
  fs.readFile('06-build-page/template.html', { encoding: 'utf8' }, function (err, data) {
    if (err) return console.log(err);
    let a;
    fs.readFile('06-build-page/components/about.html', { encoding: 'utf8' }, function (err, dat) {
      if (err) return console.log(err);

      var formatted = data.replace(/{{about}}/g, `${dat}`);
      fs.writeFile('06-build-page/template.html', formatted, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  });
}

//копирование в index.html

function copyHtml() {

}


createDir()
createHtmlFile()
getArticles()
creatCssFile()
bundllCss()
createDirAssets()
createDirFonts()
createDirImg()
createDirSvg()
copyFonts()
copyImg()
copySvg()