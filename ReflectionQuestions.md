REFLECTION QUESTIONS

// Describe the differences between using map and filter. Why did you choose to use map for transforming the data and filter for creating gender-specific arrays?

I used .map to select different objects within the array, I didn't require them to pass any tests before returning their respective values as I knew that the keys for the requested items
held the required value already.

The opposite is true for the gender-specific array. I needed to return only the values where gender was equal to a certain criteria, such as === 'female', that's why I choose to use .filter in this case.

Both array functions return a completely new array, so they don't make any changes to the existing array. Although the logic applied to their use cases is different.


// In the context of ES6 features, what benefits did you gain from using arrow functions, destructuring, and other ES6 syntax? Explain how it improved the clarity or functionality of your code.

It makes sure that my code is shorter, easier to read and more comprehensive. The use of arrow functions eliminates the need for long code, improving readability and overal structure.
I used destructuring for the same purpose of readability and shorter code. instead of having to type users.firstName, users.lastName, etc all over I could just use firstName, lastName, etc. 
Which is shorter in it's own and makes sure I had less chance of making typos or writing bloated code.