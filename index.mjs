import chalk from "chalk";

const name = [
    "Abir",
    "Hugo",
    "Sylvain"
];

const sayHello = () => {
    
    console.log(chalk.green(`je m'appelle ${name[0]}`));
    console.log(chalk.blue(`je m'appelle ${name[1]}`));
    console.log(chalk.bgRed(`je m'appelle ${name[2]}`));
};


sayHello();

// const sayHello = () => {
//     name.forEach(element => {
// });
// };