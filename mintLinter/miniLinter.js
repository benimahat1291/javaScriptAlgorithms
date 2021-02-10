let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

console.log("story >> \n",story,"\n")
console.log("overusedWords >> ", overusedWords, "\n")
console.log("unnecessayWords >>", unnecessaryWords, "\n")



//using split method to seprate into array or words
let storyWords = story.split(" ")
console.log(`Number of Words >> ${storyWords.length}\n`)

//function that uses filters one words that appear in both arrays
let wordFilter = (unnecessaryWords, storyWords) => {
  let filteredWords = storyWords.filter(word => !unnecessaryWords.includes(word))
  return filteredWords
} 

const filteredWords = wordFilter(unnecessaryWords, storyWords)
console.log("Words After filter >> \n", filteredWords, "\n")

//Word count fucntion that counts how many times words in the first Array appear in the second Array
const wordCount = (overusedWords, storyWords) => {
  overusedWords.forEach(word => {
    let count = 0
    storyWords.forEach(storyword => {
      if(word === storyword){
        count++
      }
    })
    return console.log(`${word} appears > ${count}`)
  })
}
console.log("wordCount for overusedWords >>")
wordCount(overusedWords, filteredWords)
console.log("\n")

//fucntion that checks how many sentences in paragraph
const countSentences = (arr) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "." || arr[i] === "!"){
      count++
    }
  }
  return console.log("number of sentences >>", count, "\n")
}
countSentences(story)

let betterStory = filteredWords.join(" ")
console.log("Refractored story >> \n", betterStory,"\n")







