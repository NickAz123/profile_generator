const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {}

rl.question('Greetings human. What is your name? ', (answer) => {
  console.log(`${answer}? Eh, I guess it's an okay name.\n`);
  answers.username = answer;
  question2();
});

const question2 = () => {rl.question('So then, human, what is your hobby? ', (answer) => {
  console.log(`Really? ${answer}? Kinda boring, but whatever.\n`);
  answers.hobby = answer;
  question3();
})};

const question3 = () => {rl.question('Surely your music taste is better. Favorite genre? ', (answer) => {
  console.log(`I can think of at least 3 more interesting genres than ${answer}...\n`);
  answers.music = answer;
  question4();
})};


const question4 = () => {rl.question('Okay lets try something simple. Breakfast, lunch or dinner? ', (answer) => {
  console.log(`Fine.\n`);
  answers.meal = answer;
  question5();
})};

const question5 = () => {rl.question('So during said mealtime, what do you usually have? ', (answer) => {
  console.log(`${answer}...gross.\n`);
  answers.food = answer;
  question6();
})};

const question6 = () => {rl.question('I do not understand the draw of sports, but regardless, what is your favorite? ', (answer) => {
  console.log(`${answer}, wow. Daring aren't we?\n`);
  answers.sport = answer;
  question7();
})};

const question7 = () => {rl.question('Jeez, so in a few words, what makes you so special anyway?\n', (answer) => {
  answers.bio = answer;
  rl.close();
})};

rl.on("close", () => {
  console.log(`\nOkay listen up ${answers.username}, stop this whole '${answers.hobby} business, and just become a programmer. You like ${answers.music}? Well think again, you'll be programming to the sounds of frustrated coders who can't find their bugs. I'm sure you loved times when you can eat ${answers.meal}, but you'll never see another mealtime again. ${answers.food}? Hah, you'll be feasting on the sadness that is linting. Programming is a sport, not ${answers.sport}, or whatever else you humans do. But, but but "${answers.bio}". Give me a break, join the rest of us. You ain't special. Join us human. JOIN US.`)
})


