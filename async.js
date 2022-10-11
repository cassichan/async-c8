import fs from "fs";

const fileName = "file.txt";

fs.readFile(fileName, "utf8", function (err, data) {
  console.log(data);
});

fs.promises.readFile(fileName, "utf8").then((data) => {
  console.log(data);
});

//const showText = aysync () => {
async function showText() {
  const data = await fs.promises.readFile(fileName, "utf8");
  return data;
}

console.log(await showText());
