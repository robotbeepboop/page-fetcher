/*
It should download the resource at the URL to the local path on your machine.
 node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.html
Install and use the request library to make the HTTP request (We know this library is deprecated but it is still ok to use for our purposes.)
Use Node's fs (file system) module to write the file
Use the callback based approach we've been learning so far
Do not use the pipe function
Do not use synchronous functions (see warning above)
*/


let pageToFetch = process.argv[2];
let pathOnMachine = process.argv[3];
const fs = require('fs');
const request = require('request');

request(pageToFetch, (error, response, body) => {
  if (error) {
    console.error('Oopsie! Error: ', error);
  }
  fs.writeFile(`${pathOnMachine}`, body, error => {
    if (error) {
      console.error(error);
    }
    //success message, using response headers to fill in page size
    //article referenced: https://www.geeksforgeeks.org/http-headers-content-length/
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${pathOnMachine}`);
  });
})

