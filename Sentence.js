
// say you had a 
// sentence   of 
// words    that 
// we'll  use to 
// test  this  a
// formatting   
// out word.    

// words = ["Say", ... "word."]
// length = 13

// output = [
//   "say    you   ad   an",
//   "sentence   of",
//   ...
//   "formatting   "
//   "out word.    "
// ]

//Each word has a space character(even indexes), besides the last word.
//push word and space, if not last word
//check length of array + length of next word.
//if > then length.
//go back through arr and add extra spaces

function createSen(words, length) {
    const newArr = []
    let curStr = ""
    for (var i = 0; i < words.length; i++) {
        if (words[i + 1]) {
            if (curStr.length + words[i].length + 1 > length && curStr.length + words[i].length <= length) {
                curStr += words[i]
            } else if (curStr.length + words[i].length + 1 < length) {
                curStr += words[i] + " "
            }
            if (curStr.length + words[i + 1].length > length) {
                let spaces = length - curStr.length
                for(var j=0; j <= curStr.length; j++) {
                    if (curStr[j] === " " && spaces !== 0) {
                        curStr[j] = "  "
                        spaces--
                    }
                }
                newArr.push(curStr)
                curStr = ""
            }
        }
    }
    return newArr
}

console.log(createSen(
    [
        "say", "you", "had", "a",
        "sentence", "of", "words", "that",
        "we'll", "use", "to", "test", "this",
        "a", "formatting", "out", "word."
    ],
    13))