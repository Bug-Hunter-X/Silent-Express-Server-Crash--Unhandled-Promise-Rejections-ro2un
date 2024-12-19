# Silent Express Server Crash: Unhandled Promise Rejections

This repository demonstrates a common yet often overlooked error in Express.js applications: silent server crashes without any informative error messages in the console.  This typically occurs due to unhandled promise rejections or errors within asynchronous operations that are not properly caught.

## Problem

The `server.js` file contains a basic Express.js server.  However, there is a hidden issue causing the server to crash without any helpful messages.

## Solution

The `serverSolution.js` file demonstrates how to properly handle potential errors in asynchronous operations and unhandled promise rejections.

## Setup

1. Clone this repository.
2. Navigate to the repository directory.
3. Install dependencies: `npm install express`
4. Run the buggy server: `node server.js` (observe the crash)
5. Run the fixed server: `node serverSolution.js` (observe the error message)

This example highlights the importance of robust error handling in asynchronous JavaScript code.