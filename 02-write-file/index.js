const fs = require('fs');
const path = require('path');


fs.open('02-write-file/text.txt', 'w', (err) => {
  if (err) throw err;
});


//вывод приветсвия  
const { stdin, stdout } = process;
stdout.write('Введите свой текст: ');

process.on('exit', () => stdout.write('Спасибо за введенную информацию!'));
process.on('SIGINT', () => {
  process.exit();
});
stdin.on('data', data => {
  const name = data.toString();
  let a = name.trim();
  if (a == 'exit') {
    process.exit();
  } else {
    fs.appendFile(
      '02-write-file/text.txt',
      `${name}`,
      err => {
        if (err) throw err;
      }
    );
  }
});


//выход из программы 


