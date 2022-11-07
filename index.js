const fs = require("fs");

// to create folder
fs.mkdir("./myfolder", function () {
  console.log("folder created");
});

// to delete folder
s.rmdir("./myfolder", function () {
  console.log("deleted");
});

let date = new Date().getUTCDate();
let month = new Date().getUTCMonth();
let year = new Date().getFullYear();
// console.log(`${date}/${month}/${year} `);

var d = new Date();
var time = d.toLocaleTimeString();
// console.log(time);

//to create file
fs.writeFile(
  `./${date}.txt`,
  `today date is  ${date}/${month + 1}/${year} time : ${time}`,
  function (err) {
    if (err) throw err;
    console.log("created");
  }
);

// to read file
fs.readFile("./hi.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// to read folder
fs.readdir("./", function (err, data) {
  if (err) throw err;
  console.log(data);
});
