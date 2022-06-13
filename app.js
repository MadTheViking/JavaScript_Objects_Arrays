console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(_sumofnumber) {
    let sum = 0;
    numbers.forEach((number) =>{
        numbers += sum;
    });
    return
}
//console.log(array.sum(numbers));
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    auther: "Watt Key",
    page: "320",
    read: "2 Times",
}
console.log(book);

//book.info = function () {
 //   return `${this.auther} is the auther an it has ${this.page} and ive read it ${this.read}`;
//}
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";


function reverseWords(sentence){
    let result = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let letters = words[i].split("");
        letters.reverse();
        let reverseWords = letters.join("");
        result.push(reverseWords);
    }

  return result.join(" ");
}

console.log(reverseWords(sentence));






console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    let header = data.slice(0, data.indexOf("\n")).split(",");
    let values = data.slice(data.indexOf("\n") + 1).split("\n");

    const customArr = values.map((row) => {
        let values = row.split (",");
        let obj = {}
        values.forEach((col, idx) => {
            if (idx < Headers.length) {
                obj[headers[idx]] = col;
            } else {
                obj[`misc${idx}`] = col;
            } 
        })

        return obj;
    })

    return customArr;
}

console.log(csvConverter(csvData));