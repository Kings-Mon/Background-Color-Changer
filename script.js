// Get all the buttons and the body element
const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
//   console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    
    // if-else 
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'red') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'green') {
    //   body.style.backgroundColor = e.target.id;
    // }

    // OR switch-case
    switch (e.target.id) {
      case 'grey':
          body.style.backgroundColor = e.target.id;
          break;
      case 'white':
          body.style.backgroundColor = e.target.id;
          break;
      case 'blue':
          body.style.backgroundColor = e.target.id;
          break;
      case 'yellow':
          body.style.backgroundColor = e.target.id;
          break;
      case 'red':
          body.style.backgroundColor = e.target.id;
          break;
      case 'green':
          body.style.backgroundColor = e.target.id;
          break;
      default:
        console.log('Unknown color'); // If unexpected button is clicked
    }
  });
});


// Here, another 5 types of different ways to achive the solution.
// ========================================================================== //

// Another Approach 1 :-
// Adding individual event listener for each button.

// // Get references to the buttons and the body
// const greyButton = document.getElementById('grey');
// const whiteButton = document.getElementById('white');
// const blueButton = document.getElementById('blue');
// const yellowButton = document.getElementById('yellow');
// const redButton = document.getElementById('red');
// const greenButton = document.getElementById('green');

// // Add event listeners to each button to change the background color when clicked
// greyButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'grey';
// });

// whiteButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'white';
// });

// blueButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'blue';
// });

// yellowButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'yellow';
// });

// redButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'red';
// });

// greenButton.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'green';
// });


// Another Approach 2 :-
// Using a Single Event Listener for All Buttons with Data Attributes.

// // Select all buttons
// const buttons = document.querySelectorAll('.button');

// // Add a single event listener for all buttons
// buttons.forEach(button => {
//   button.addEventListener('click', function (e) {
//     // Get the color from the data attribute
//     const color = e.target.getAttribute('id');
//     // Change the background color based on the data attribute
//     document.body.style.backgroundColor = color;
//   });
// });


// Another Approach 3 :-
// Using a Map or Object to Store Color Mappings.

// // Create an object to map button ids to colors
// const colorMap = {
//     grey: 'grey',
//     white: 'white',
//     blue: 'blue',
//     yellow: 'yellow',
//     red: 'red',
//     green: 'green'
//   };
  
//   // Select all buttons
//   const buttons = document.querySelectorAll('.button');
  
//   // Add event listener to each button
//   buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//       const color = colorMap[e.target.id]; // Use the button's id to get the color
//       if (color) {
//         document.body.style.backgroundColor = color;
//       }
//     });
//   });
  

// Another Approach 4 :-
// Using Event Delegation.

// // Parent container where buttons will be added or already exist
// const container = document.querySelector('.canvas');

// container.addEventListener('click', function (e) {
//   // Check if the clicked element is a button
//   if (e.target.classList.contains('button')) {
//     // Set background color based on button's id
//     document.body.style.backgroundColor = e.target.id;
//   }
// });


// Another Approach 5 :-
// Using a Loop with Inline Event Handlers.

// const buttons = document.querySelectorAll('.button');

// buttons.forEach(function(button) {
//   button.onclick = function() {
//     // Use button's id to change background color
//     document.body.style.backgroundColor = button.id;
//   };
// });
