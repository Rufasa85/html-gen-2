const inquirer = require("inquirer");
const fs = require("fs");
const genHTML = require("./lib/genHTML");
const { questions } = require("./lib/inqQuestions");

// inquirer.prompt(questions).then((ans) => {
//   fs.writeFile(
//     `./output/${ans.user.trim().split(" ").join("-").toLowerCase()}.html`,
//     genHTML(ans),
//     (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log("yay1");
//     }
//   );
// });


inquirer.prompt(questions).then((ans) => fs.writeFile(`./output/${ans.user.trim().split(" ").join("-").toLowerCase()}.html`,genHTML(ans),(err) => err?console.log(err):console.log("yay!")));
