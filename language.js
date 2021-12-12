const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');

console.log(chalk.green.bold('Loading ' + Config.LANG + ' language...🎀🎀'));
console.log(chalk.red.bold('You entered an eny language. English language was chosen.'));
var json = JSON.parse(fs.readFileSync('./DataBase/language/EN.json'));

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}

// ===============================================Comment====================================================================

// const Config = require('./config');
// const fs = require('fs');
// const chalk = require('chalk');

// if (fs.existsSync('./DataBase/language/' + Config.LANG + '.json')) {
//     console.log(
//         chalk.green.bold('Loading ' + Config.LANG + ' language...🎀🎀')
//     );

//     var json = JSON.parse(fs.readFileSync('./DataBase/language/' + Config.LANG + '.json'));
// } else {
//     console.log(
//         chalk.red.bold('You entered an invalid language. English language was chosen.')
//     );

//     var json = JSON.parse(fs.readFileSync('./DataBase/language/EN.json'));
// }

// function getString(file) {
//     return json['STRINGS'][file];
// }

// module.exports = {
//     language: json,
//     getString: getString
// }