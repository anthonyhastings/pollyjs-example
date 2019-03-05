# Polly.JS Example

## Introduction
![Demonstration](https://raw.githubusercontent.com/anthonyhastings/pollyjs-example/master/images/pollyjs-example.gif)

This repository showcases examples of using Polly.JS to replay pre-recorded HTTP interactions. We demonstrate a fetch call being instantly resolved with the contents of a `.har` file, and another fetch call that is intercepted and responded to within JS.

## Instructions
This demonstration assumes you already have Node and NPM installed. The steps are as follows:

1) Install node dependencies:
```shell
npm install
```

2) Run the application:
```shell
npm start
```

3) Observe that requests are replayed and intercepted respectively:
```shell
Replayed ➞ GET https://jsonplaceholder.typicode.com/posts/1 200 • 2ms
Intercepted ➞ GET https://made-up-website.com/hello-world 200 • 0ms
```

4) Delete the `recordings/` directory and re-run the application to observe the first request gets recorded (for future replaying):
```shell
Recorded ➞ GET https://jsonplaceholder.typicode.com/posts/1 200 • 136ms
```