
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


function createSentence(words, length){
    let currentSen = ""
    let currentWord = words[0]
    let isValid = ""
    let text = "";
    let currentIndex = 0
    let newWords = []
    while(currentWord !== words[words.length-1]){
      if(words[currentIndex] !== words[words.length-1]){
      currentSen += words[currentIndex] + " "
      }else{
      currentSen += words[currentIndex]
      }
      isValid = currentSen + words[currentIndex + 1]
      console.log(currentSen, currentSen.length, "=============")
      currentWord = words[currentIndex]
      if(isValid.length < length){
        const spaces = currentSen.length - length
        let added = 0
        for(var i=0; i< length; i++){
          text += currentSen[i];
          if(currentSen[i] === " " && spaces != added){
            text += " "
            added++
          }
          if(text.length === length){
            newWords.push(text)
          }
          // console.log(text, text.length, "2===============")
        }
      }else if(isValid.length === length){
        newWords.push(currentSen)
      }
      currentIndex++
    }
    return newWords
  }
  
  console.log(createSentence(["say","you", "had", "a"], 13))