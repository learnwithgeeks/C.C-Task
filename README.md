# Node JS Assessment Task Todo API

## What This Project About ?
**This project is simple Node JS Project Todo list API .**
In this project i have Node JS as backend and React JS as frontend and Mongodb as database .
- [app.js](https://github.com/viveksharmaui/C.C-Task/blob/master/app.js) is main server file .
- [routes folder](https://github.com/viveksharmaui/C.C-Task/tree/master/routes) contain all the API's which we used in this project .
- [tests folder](https://github.com/viveksharmaui/C.C-Task/tree/master/tests) contain all the API's test which we used in this project .
- [security folder](https://github.com/viveksharmaui/C.C-Task/tree/master/security) contain a file secure.js in this file we have database address and port number .
- [models folder](https://github.com/viveksharmaui/C.C-Task/tree/master/security)
contain all database schema .
- [strategy folder](https://github.com/viveksharmaui/C.C-Task/tree/master/strategy)
contain passport local strategy for authetication .
- [client folder](https://github.com/viveksharmaui/C.C-Task/tree/master/client)
contain React JS File for single and collabrative collapsed todo .

## In This Project I Have Done
- [User Authentication with passport js (signup and signin)](https://github.com/viveksharmaui/C.C-Task/tree/master/routes)
- [Reset password with email](https://github.com/viveksharmaui/C.C-Task/blob/master/routes/changePassword.js)
- [personal lists (one user owns list)](https://github.com/viveksharmaui/C.C-Task/blob/master/client/src/singleTodo.js)
- [collaborative lists (multiple users own list)](https://github.com/viveksharmaui/C.C-Task/blob/master/client/src/collabrativeTodo.js)
- [Push notifications](https://github.com/viveksharmaui/C.C-Task/blob/master/client/src/push-notification.js) using Firebase messaging to multiple devices and users for changes
- [Jest Backend Tests](https://github.com/viveksharmaui/C.C-Task/tree/master/tests) and [Jest Frontend Test](https://github.com/viveksharmaui/C.C-Task/tree/master/client/src)

## How to run Node JS ?
- If you want to run Node JS then run this command **npm start** or **npm run dev**.
- If you want to run test then for backend clone this repo and run this command **npm run test**.

## How to run React JS ?
- If you want to run React JS  open [client folder](https://github.com/viveksharmaui/C.C-Task/tree/master/client) and write this command **npm start**
- If you want to run test in React JS open [client folder](https://github.com/viveksharmaui/C.C-Task/tree/master/client) and write this command **npm run test** .

## How to use ?
- If you want to use this project 1st you need to Node Js and MongoDB installed localy on your system .
- For single and collabrative user first of all you need to create user account by [Signup API](https://github.com/viveksharmaui/C.C-Task/blob/master/routes/signup.js) .
- You can add single todo or collabrative todo by this API's [Single Todo API] (https://github.com/viveksharmaui/C.C-Task/blob/master/routes/singleTodo.js) and 
[Collabrative Todo API](https://github.com/viveksharmaui/C.C-Task/blob/master/routes/colabTodo.js) .
- After Todo is added in database now you can run React JS and open localhost:<port>/single#user-email after that all the todo list for user-email will be shown to client same case for collbrative todo open localhost:<port>/collabrative#user-email after that all the todo list for user-emaill will be shown to client .

## Thank You