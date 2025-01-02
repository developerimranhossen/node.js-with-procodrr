import { readFile } from "node:fs/promises";

const filePath = process.argv[2];
const searchWord = process.argv[3].toLowerCase();

const fileContent = await readFile(filePath, "utf-8");

const wordArray = fileContent.toLowerCase().split(/\W/).filter((word) => word);

const wordCount = {};

wordArray.forEach((word) => {
  if (word in wordCount) {
    wordCount[word] += 1;
  } else {
    wordCount[word] = 1;
  }
});
console.log(wordCount);



if (!wordCount[searchWord]) {
  console.log(`The word ${searchWord} is not found in the text`);
} else {
  console.log(
    `The word ${searchWord} appears ${wordCount[searchWord]} times in the text`
  );
}
