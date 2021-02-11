// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//checks if card is a valid card number using Luhn algo
const validateCred = (card) => {
  //empty arry to hold values
  let tempArr = []
  //check if cardlength is even or odd
  if(card.length%2 === 0){
    //if length is even 
    for(let i=card.length-1; i>=0;i--){
      if(i%2 === 0){
        //for ever even number here do opperations and push
        let tempNum = card[i]*2
        if(tempNum > 9){
          tempNum -= 9
        }
        tempArr.push(tempNum)
      }else{
        //for every odd number leave it the same and push 
        tempArr.push(card[i])
      }
    }
    //same process as above for cards with odd length
  } else {
    //we have to change the scope of i to exclude the first index
        for(let i=card.length-1; i>0;i--){
      if(i%2 === 0){
        let tempNum = card[i]*2
        if(tempNum > 9){
          tempNum -= 9
        }
        tempArr.push(tempNum)
      }else{
        tempArr.push(card[i])
      }
    }
  }
  //create a value to hold the sum of tempArr
  let sum = 0
  //sum all numbers in arry
  tempArr.forEach(num => sum += num)
  //if sum is divisible by 10, card is a valid Card number
  if(sum%10 === 0){
    return true
  }else {
    return false
  }
}

//returns an array of all invalid cardnumbers
const findInvalidCards = (batch) => {
  let invalidCards = []
  batch.forEach(card => {
    if(validateCred(card) === false){
      invalidCards.push(card)
    }
  })
  return invalidCards
}
//invoke func with batch of cards and save result to variable
const invalidCardArr = findInvalidCards(batch)
//check what kind of card it is and add type to list with unique values
const idInvalidCardCompanies = (invalidCardsArr) => {
  let cardCompany = []
  invalidCardArr.forEach(card => {
    if(card[0] === 3 && !cardCompany.includes('Amex')){
      cardCompany.push('Amex')
    } else if(card[0] === 4 && !cardCompany.includes("Visa")) {
      cardCompany.push('Visa')
    } else if(card[0] === 5 && !cardCompany.includes("Mastercard")) {
      cardCompany.push('Mastercard')
    } else if(card[0] === 6 && !cardCompany.includes("Discover")) {
      cardCompany.push('Discover')
    }
  })
  return cardCompany
}



//logs validation of cards of mulitple lengths
console.log("Validate Card>>", validateCred(valid1), validateCred(valid3), validateCred(invalid1), validateCred(invalid3), "\n")

//logs all the cards that were invalid in an array of cards
console.log("invalidCards >> \n", findInvalidCards(batch),"\n")

//logs unique array with names of card companies that have invalid cards
console.log("companies with invalid cards >> \n",idInvalidCardCompanies(invalidCardArr))





