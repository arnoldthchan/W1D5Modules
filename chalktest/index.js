var chalk = require('chalk');

var message = 'Hello '+ chalk.red('world');
console.log(message);

function greenText(string){
  return chalk.green(string);
}


function redBack(string){
  return chalk.white.bgRed(string);
}
function changeCol(callback, string){
  return callback(string);
}
console.log(greenText('Rappity Rap'));

console.log(changeCol(greenText, 'Rap Rappity'))

console.log(redBack('asdasd'));
