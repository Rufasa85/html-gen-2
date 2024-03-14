const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "user",
  },
  {
    type: "input",
    message: "Where are you from?",
    name: "location",
  },
  {
    type: "input",
    message: "What is your github?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your linkedin?",
    name: "linkedin",
  },
  {
    type: "list",
    message: "What is your fave color?",
    name: "color",
    choices: ["salmon", "#c0ffee", "green", "#facade"],
  },
];
module.exports = {
  questions,
};
