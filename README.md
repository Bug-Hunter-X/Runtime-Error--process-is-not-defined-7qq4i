# Next.js 15 Runtime Error: process is not defined

This repository demonstrates a common runtime error in Next.js 15 applications when accessing server-side environment variables within client-side components.  The error arises because the `process` global object is not available in the browser environment.

## Problem

The `about.js` file attempts to access `process.env.MY_VARIABLE`.  This works correctly on the server, but fails in the browser because `process` is undefined in that context.

## Solution

The `aboutSolution.js` file shows how to correctly handle this using the `getServerSideProps` function to fetch the environment variable on the server and pass it to the client-side component as a prop.