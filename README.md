# Welcome to the Front-End Web Development Boot Camp

## Instructor Information

- Name: Eric Greene
- Email: eric@t4d.io

## Daily Schedule

- Class: 9am to 5pm PDT (new teaching will end at 4:50pm)

- Breaks
  - Morning #1: 10:10am - 10:20am
  - Morning #2: 11:20am - 11:30am
  - Lunch: 12:30pm - 1:30pm
  - Afternoon #1: 2:30pm - 2:40pm
  - Afternoon #2: 3:40pm - 3:50pm

## Content Schedule

- Day 1 - What is React, ES2015 Modules, Arrow Functions, JSX, React Children, React Router, Layout, Component Logic, Props, Prop Types
- Day 2 - Hooks, State, Forms, Event Handlers, Component Composition, State Management with Context
- Day 3 - Connecting to REST API, Performance Optimizations, Class-based Components, Modals

## How to Use the Instructor's Version

The following instructions will help students pull down the instructor's version to resume class where the instructor is.

1. Clone this repository to a new folder. Do not attempt to copy these files over your version or another version which you have cloned. Replace `FOLDER_NAME` with the name of a new folder which will be created when the content is cloned.

```
git clone https://github.com/t4d-classes/react_05272020.git FOLDER_NAME
```

2. Change into the folder you cloned into.

```
cd FOLDER_NAME
```

3. Run the following command to install the NPM packages.

```
npm install
```

4. To start the React application, run the following command.

```
npm start
```

5. Open the editor of your choice and edit the files.

## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the project created by the Create React App generator.

To install those packages, run the following command from within the root folder of the project:

```bash
npm install -D json-server npm-run-all
```

Next, the `package.json` needs to be updated to easily run the REST API provides by the [JSON Server](https://github.com/typicode/json-server). Here is the `scripts` configuration which can be copied and pasted for the REST API. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "start": "run-p web rest",
  "web": "react-scripts start",
  "rest": "json-server --port 3060 ./db.json",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

Here is the `db.json` JSON which can be copied and pasted for the REST API portion of the class. This content will pasted into a file named `db.json`. The `db.json` file will be placed in the `demo-app` folder, the same folder as the `package.json` file. The `db.json` file should **NOT** be placed in the `src` folder.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {"id":1,"make":"Ford","model":"Fusion Hybrid","year":2019,"color":"blue","price":45000},
    {"id":2,"make":"Tesla","model":"S","year":2018,"color":"red","price":100000}
  ]
}
```
