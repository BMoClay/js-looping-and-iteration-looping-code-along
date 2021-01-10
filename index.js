// Code your solutions in this file


// function writeCards(array, event) {
//     let thankYouCards = []
//     for (let i = 0; i < array.length; i++) {
//       thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
//     }
  
//     return thankYouCards;
//   }

// function countDown( startingNumber ){
//     while (startingNumber > 0) {
//         console.log( startingNumber );
//         startingNumber -= 1;
//     }
//     console.log( startingNumber );
// }

function writeCards(namesArray, eventName) {
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
  }
  return thankYouCards
}

function countDown(startingNumber) {
  while (startingNumber > 0) {
    console.log(startingNumber)
    startingNumber -= 1
  }
  console.log(startingNumber)
}