<h1 align="center">Task Harbor - A TodoApp</h1>
<div align="center">
  <h3>
    <a href="https://4rc7v5.csb.app/" target="_blank" rel=“noreferrer”>
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/gayathri1462/ToDoApp-TaskHarbor" target="_blank" rel=“noreferrer”>
      Solution
    </a>
  </h3>
</div>

<!-- OVERVIEW -->

## Overview
<img width="877" alt="image" src="https://github.com/gayathri1462/ToDoApp/assets/42805318/4dae3ceb-ab02-474b-9f74-ec3332c6c821">


<p>This is a robust task management web application built using React JS and Redux. It empowers users with comprehensive CRUD (Create, Read, Update, Delete) functionalities, enhancing the efficiency of task management. The application harnesses the power of React Thunk middleware to seamlessly manage intricate asynchronous operations, ensuring not only optimal performance but also an impeccable user experience. Stay organized, streamline your tasks, and experience smooth task handling with this intuitive web application.</p>

### Technologies and Tools Used:

- Languages: HTML, CSS, TypeScript
- Libraries/Frameworks:
  - React JS
  - Redux
  - redux-persist
  - Redux Thunk
  - React Icons
  - axios
  - styled-components
- Version Control: Git
- Package Managers: NPM

## Features

The todo management web application follows the following flow:

- The initial screen displays a list of tasks. If there are no taks, it shows an image prompting users to add tasks.
- An input field and a button are provided.
- The button is enabled once the user types something. Clicking the button creates and displays a task below.
- The screen has 3 tabs: "All," "Open," and "Closed," with counts indicating the number of open and closed tasks.
- Users can remove a task by clicking the remove button or mark it as complete using the tick button.
- The "created at" indicator shows when a task was created.
- If there are closed tasks, a remove button is displayed in closed task. Clicking it deletes all closed tasks.
- When a task is marked as closed, the tick button disappears, and a line is struck through the task text to visually indicate its completed.
- The app utilizes a public API for CRUD operations, powered by the [public-api-crud-todoApp](https://github.com/ndraaditiya/public-api-crud-todoApp) GitHub repository. 
- Axios and Redux are employed for seamless integration and data management.
- Redux persist stores data for page reloads.
- Styled components are used to enable conditional styling
- React Icons enhance the user interface.


## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gayathri1462/ToDoApp-TaskHarbor

# Install dependencies
$ npm install

# Run the app
$ npm start
```


