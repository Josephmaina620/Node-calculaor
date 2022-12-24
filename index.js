const express = require("express");
const bodyParser = require("body-parser");
/**
 * These two lines import the express and body-parser modules.
 * express is a popular web application framework for building web servers
 * and web applications, and body-parser is a middleware that parses the request
 *  body and makes it available as an object in the request object's body property.
 */

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * This creates an instance of the express app, and adds the body-parser
 * middleware to the app's middleware stack using the use function.
 * The extended option is set to true to enable the use of complex objects
 * (e.g. arrays) in the request body.
 */

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
/**
 * This registers a route handler for the root path ("/") that listens for GET requests.
 * When a GET request is received, the route handler sends back the contents of
 * the index.html file located in the same directory as the script.
 * The sendFile function is a method of the response object (res) that sends
 * a file as the response body.
 */

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The result of your calculations are: " + result);
});
/**
 * This registers another route handler for the root path that listens
 * for POST requests. When a POST request is received, the route handler reads
 * the values of the n1 and n2 fields from the request body (which was parsed
 * by the body-parser middleware), converts them to numbers using the Number function,
 * adds them together, and sends a response to the client with the result of
 *  the calculation.
 */

app.listen(8000, () => console.log("The Server is running on port 8000. "));
/**
 * This starts the server and makes it listen for incoming requests on port 8000.
 *  When the server starts, it logs a message to the console indicating that
 * it is running.
 */
