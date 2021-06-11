var readLineSync = require("readline-sync")
const chalk = require("chalk")

userName = readLineSync.question(chalk.bold.red("What is your name? "))

console.log(chalk.blue("Hi, "+ userName + ". Welcome to the Stock Market Quiz"))

console.log(chalk.yellow("There are two levels in this game.\n\nYou are eligible for level 2 by answering atleast 3 questions correctly out of 5 randomly asked questions.\n\nBest of Luck."))

var score = 0;
highScore = {
  userName: "Shivam",
  score: 4
}

var questions = [
  {
    question: "Who is popularly known as the Big Bull in India?\n",
    //options: ["Rakesh Tuntunwala", "Mahesh Jhunjhunwala", "Rakesh Jhunjhunwala", "Ramesh mahrenwala"],
    answer: "Rakesh Jhunjhunwala",
    type: 1
  },
  {
    question: "The term bullish indicates",
    answer: "Positive price action",
    options: ["Positive price action", "Negative price action", "Neutral price action", "None of the above"],
    type: 3
  },
  {
    question: "If you buy a company's stock then",
    answer: "You own a part of the company",
    options: ["You own a part of the company", "You have lent money to the company", "You are liable for the company's debts", "The company will return your original investment to you with interest"],
    type: 3
  },
  {
    question: "Sensex is a barometer for stock market behavior. It tells you if most of the stocks have gone up or down. True or False?",
    answer: true,
    type: 2
  },
  {
    question: "When is the market called a Bull Market?",
    answer: "When a broad market index records 20% gain from its previous low",
    options: ["When a major market hits a new record", "When a broad market index records 20% gain from its previous low", "When analyst announce so"],
    type: 3
  },
  {
    question: "If a company files for bankruptcy, which of the securities is at risk of becoming worthless?",
    answer: "The company's common stock",
    options: ["The company’s preferred stock", "The company's common stock", "The company's bonds", "None of the above"],
    type: 3
  },
  {
    question: "What kind of stocks do you short-sell?",
    answer: "A stock that might be experiencing lost value in the future",
    options: ["A stock that has the potential to gain value in future", "A stock that has profits", "A stock that might be experiencing lost value in the future"],
    type: 3
  },
  {
    question: "How many companies are included in the SENSEX?",
    answer: "30",
    options: ["11", "30", "50", "500"],
    type: 3
  },
  {
    question: "Which of the following is responsible for the fluctuations in the Sensex?",
    answer: "All of the above",
    options: ["Political instability", "Monetary policy", "Rain", "All of the above"],
    type: 3
  },
  {
    question: "SENSEX is the index of --------------------",
    answer: "Bombay stock exchange",
    options: ["Cochin stock exchange", "Bombay stock exchange", "National stock exchange", "None of the above"],
    type: 3
  }
  ]

var questions_l2 = [
  {
    question: "When was Nifty established?",
    answer: "1996",
    options: ["1996", "1952", "1965", "None of the above"],
    type: 3
  },
  {
    question: "India Index Services & Products Limited (IISL) is a joint venture between two entities",
    answer: "NSE and CRISIL Ltd.",
    options: ["BSE and CARE Ltd.", "NSE and CRISIL Ltd.", "BSE and CRISIL Ltd.", "NSE and ICRA Ltd."],
    type: 3
  },
  {
    question: "In India, NIFTY and SENSEX are calculated on the basis of",
    answer: "Free-float Capitalization",
    options: ["Market Capitalization", "Paid up Capital", "Free-float Capitalization", "Authorized Share Capital"],
    type: 3
  },
  {
    question: "The first computerised online stock exchange in India was",
    answer: "NSE",
    options: ["NSE", "OTCEI", "BSE", "MCX"],
    type: 3
  },
  {
    question: "Which of the following derivative is not traded on Indian Stock Market?",
    answer: "Forward Rate Agreements",
    options: ["Index Options", "Stock Futures", "Index Futures", "Forward Rate Agreements"],
    type: 3
  },
  {
    question: "In primary markets, the property of shares which made it easy to sell newly issued security is considered as",
    answer: "increased liquidity",
    options: ["decreased liquidity", "increased liquidity", "money flow", "large funds"],
    type: 3
  },
  {
    question: "The price of underlying asset is added into intrinsic value of option to calculate",
    answer: "exercise price of option",
    options: ["forward price of option", "exercise price of option", "book value of option", "spot price of option"],
    type: 3
  },
  {
    question: "The base year of Nifty is -------------",
    answer: "1995",
    options: ["1978", "1992", "1987", "1995"],
    type: 3
  }]

function checkHighScore(score){
  if(score>highScore.score){
    console.log(chalk.yellow("Congrats! "+userName + " You have beaten the high score."))
    console.log(chalk.blue("The new Finance King in the North!!!"))
  }
}

function askQuestion(question_obj){
  question = question_obj.question
  answer = question_obj.answer
  type = question_obj.type
  
  var answerCorrect;

  if(type === 1){
    userAnswer = readLineSync.question(chalk.bold.blue(question))
    answerCorrect = (userAnswer.toUpperCase() === answer.toUpperCase())
  }
  else if(type === 2){
    userAnswer = readLineSync.keyInYN(chalk.bold.blue(question))
    console.log(userAnswer)
    answerCorrect = (userAnswer === answer)
  }
  else if(type === 3){
    options = question_obj.options
    userAnswer = readLineSync.keyInSelect(options, chalk.bold.blue(question))
    
    answerCorrect = (options[userAnswer]===answer)
  }

  if(answerCorrect){
    console.log(chalk.green("Correct"))
    score = score + 1
    console.log(chalk.green("Updated score is "+score))
    checkHighScore(score)
  }
  else{
    console.log(chalk.red("Incorrect Answer"))
  }
}

function myRandomInts(quantity, max){
  const set = new Set()
  while(set.size < quantity) {
    set.add(Math.floor(Math.random() * max))
  }
  return set
}

var set = myRandomInts(5, questions.length);

set.forEach(v => askQuestion(questions[v]))

if(score>2){
  console.log("Congrats! You successfuly reached Level 2.\nLet's play")
  var set = myRandomInts(5, questions_l2.length);
  set.forEach(v => askQuestion(questions_l2[v]))
}

console.log("Thank You for playing Stock Market Quiz Game. Your final score is "+ score)

if(score>highScore.score){
  console.log("Send us a screenshot if you broke the high score.")
}