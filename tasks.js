/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
 var lists = ["Ahmad","Hadi","Nour"]
 function onDataReceived(text) {
  text = text.trim();
  if (text === 'quit') {
    quit();
  }
  else if (text === 'exit'){
    exit();
  }
  else if(text.split(" ").shift() === 'hello'){
    hello(text);
  }
  else if(text === 'help'){
    help();
  }
  else if(text === 'list'){
    list();
  }
  else if(text === 'add'){
    add();
  }
  else if(text === 'remove'){
    remove();
  }


  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *@param {string}
 * @returns {void}
 */
 function hello(text){
  console.log(text + '!')
}
 
/**
 * list possible commands
 *
 * @returns {void}
 */
function help() {
  console.log("possible command\nquit\nexit\nhelp\nhello,\nhello:its a command that prints hello alone and once you add something with alone it will type it too");
}

function list() {
 lists.forEach((element ,index) => {
  console.log(`${index +1}-${element}`);
  });
  
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function exit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Hodhod Alameddine");
