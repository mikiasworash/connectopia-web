const fs = require("fs");
const path = require("path");

// create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   else console.log("Folder Created...");
// });

// create folder and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to...");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "\nI love Node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("File Appended...");
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Reaname file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "newfile.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);
