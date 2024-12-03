# Background Color Changer

This project demonstrates how to change the background color of a webpage by clicking various buttons. It showcases several different approaches for handling the event listeners, including using `switch-case`, `individual event listeners`, `data attributes`, `event delegation`, and inline event handlers. This is a simple and interactive example of DOM manipulation in JavaScript.

## Features

- **Interactive Buttons**: Multiple buttons (`grey`, `white`, `blue`, `yellow`, `red`, `green`) that, when clicked, change the background color of the webpage.
- **Multiple Implementations**: Various approaches to handle events and manipulate the DOM (JavaScript) for educational purposes.
- **Simple DOM Manipulation**: An example of changing page styles dynamically using JavaScript.

## Approaches Implemented

1. **Using `switch-case`**:
   - Loops through the buttons and uses a `switch-case` statement to handle background color changes based on the button clicked.

2. **Adding Individual Event Listeners**:
   - Each button has a separate event listener attached to it. When clicked, each listener changes the background color.

3. **Using a Map/Object for Color Mappings**:
   - An object is used to map button `id`s to background colors. The event listener retrieves the corresponding color using the button's `id`.

4. **Event Delegation**:
   - A single event listener is added to the parent container, leveraging event delegation to handle clicks on individual buttons dynamically.

5. **Using Inline Event Handlers**:
   - The `onclick` attribute is used within a loop to assign event handlers directly to each button, simplifying the code.

## Technologies Used

- **HTML**: Structure and layout of the webpage, including the buttons for interaction.
- **CSS**: Basic styling for buttons and layout.
- **JavaScript**: Handles the event listeners and dynamically changes the background color of the page when a button is clicked.

## How to Use

1. **Clone the repository**:
   First, clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/Kings-Mon/Background-Color-Switcher
2. **Navigate to the project folder**: Change into the project directory:
   ```bash
    cd button-color-changer
3. **Open the `index.html` file in your browser**: Double-click on the `index.html` file in your browser, or open it via the browser's `File` → `Open` menu to view the project in action.

4. **Interact with the Buttons**: Click on any of the color buttons to instantly change the background color of the webpage.

## File Structure

 * `index.html`: The main HTML file that contains the structure of the webpage and buttons.
 * `styles.css`: Contains basic styles for the buttons and page layout.
 * `script.js`: The JavaScript file that implements the event listeners to change the background color.

## Example of Usage
When you open the `index.html` file, you'll see buttons labeled with different colors. Clicking any of these buttons will change the background color of the page to match the color of the button.

For example:
  *  Clicking the "Grey" button will set the background to grey.
  *  Clicking the "Red" button will set the background to red.
  *  Similarly, other colors will change the background to white, blue, yellow, or green.
   
## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests for improvements, bug fixes, or new features.

## License
This project is open-source and available under the MIT License.

## Acknowledgments
  * This project was built as an educational example of basic DOM manipulation in JavaScript.
  * Inspired by the need to demonstrate different ways to interact with the DOM and handle events in JavaScript.
