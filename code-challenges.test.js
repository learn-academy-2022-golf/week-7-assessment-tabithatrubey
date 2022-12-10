// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("nameCapital", () => {
  it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
      const people = [
          { name: "ford prefect", occupation: "a hitchhiker" },
          { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
          { name: "arthur dent", occupation: "a radio employee" }
        ]
     // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
      expect(nameCapital(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  
  })
})
// ReferenceError: nameCapital is not defined

const nameCapital = (array) => {
  // Iterate over the array to access object properties.
  // Use dot notation to access the object name values.
  // Split the word with ' ', the space is intentional to split the words into two different strings so they can be evaluated or iterated over to capitalize the first letter of each first word in the strings and then add the remaining of each word not including the first letter to the Capital letter that was just generated and then join the strings back together to create one string again with the first and last name having capital letters. Then, add a space and the word is and the object occupation using dot notation and a period to render the expected outcome. 
  return array.map(obj => obj.name.split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ') + " " + "is" + " " + obj.occupation + ".") 
      }

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("onlyRemainders", () => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
     // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee"]
      expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  
  })
})
// ReferenceError: onlyRemainders is not defined
// Filter through the array to determine if the value is a number
    // If it is put it in an array
    // Then divide each number and return their remainder

    // Create a function onlyRemainders that has one parameter: array
const onlyRemainders = (array) => {
  // Create a variable that will be set at the array we need to filter through the mix of numbers and strings and return only the type that are numbers.
  let newArray = array.filter(element => typeof element === 'number') 
  // Next, create a new variable that will set the numbers to be divided by 3 and map over the first variable applying the second variable's function to each number.
      let divisibleNum = num => num % 3
      return newArray.map(divisibleNum)

      
  }
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("allCubed", () => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
      expect(allCubed(cubeAndSum1)).toEqual(99)
      expect(allCubed(cubeAndSum2)).toEqual(1125)
  
  })
})
// ReferenceError: allCubed is not defined


// Create a function called allCubed that has one parameter: an array
const allCubed = (array) => {
  // Create a variable that will act as the container that will hold the end result, set at 0. 
  let endingArray = 0
  // Iterate through the array
  for (let i=0; i<array.length; i++) {
    // as the array is iterated over each index, cube the value, and add it to the above variable, endingArray.
  endingArray += array[i] ** 3
  }
  // return the defined variable to get the end result of all index' cubed and added together.
  return endingArray }

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total