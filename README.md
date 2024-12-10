# Express.js - req.body is empty after using express.json()

This repository demonstrates a common issue in Express.js applications where `req.body` remains empty despite using `express.json()` middleware.  This problem typically arises from incorrect middleware order or a mismatch between the expected content type and the actual request data.

## Bug Description

The provided `bug.js` file showcases an Express.js application that attempts to parse JSON data from a POST request. However, `req.body` is consistently empty, leading to unexpected behavior.

## Solution

The solution, found in `bugSolution.js`, highlights the correct way to implement middleware and handle JSON requests effectively.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the Express.js dependency.
3. Run `node bug.js` to start the buggy application.
4. Send a POST request to `http://localhost:3000/user` with a JSON payload in the request body.
5. Observe that the application logs an empty object for `req.body`.
6. Repeat steps 2-5 with `bugSolution.js` to see the correct behavior.
