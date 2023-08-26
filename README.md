## 🤔 What is the DOM (recap)?

“The Document Object Model () is the data representation of the objects that comprise the structure and content of a document on the web… It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.” - MDN

## 🗺 The Task

Create a HTML/CSS/JS project which allows users to enter a password and check its strength. The page should contain a heading (How good is your password?), an input field, and a progress bar.
Below are a set of User Requirements for your project to meet.
This task is about DOM manipulation but get as creative as you like!
💡 Remember to commit little and often to GitHub and keep code neat, tidy and well-formatted. 🙌

## 📝 User Requirements:

Given the page is rendered with the correct input field
When the user changes a single character in the input field
Then the progress bar should update its value

Given the page is rendered with a progress bar that has a value range of 0-100
When the user inputs a password
Then the progress bar value should be the number of characters multiplied by 5

Given the user inputs a password
When the password contains fewer than 8 characters
Then the progress bar should be red

Given the user inputs a password
When the password contains fewer than 8 characters
Then the page should display the feedback `“Should be longer”`

Given the user inputs a password
When the password contains 8 characters or more, but less than 12 characters
Then the progress bar should be orange

Given the user inputs a password
When the password contains 8 characters or more, but less than 12 characters
Then the page should display the feedback `“Pretty good”`

Given the user inputs a password
When the password contains 12 characters or more
Then the progress bar should be green

Given the user inputs a password
When the password contains 12 characters or more
Then the page should display the feedback `“Grrrreat!”`
