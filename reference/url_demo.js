const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:5000/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.href.toString());

// Get Host (root domain)
console.log(myUrl.host);

// Get Host name
console.log(myUrl.hostname);

// Get Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);

// Params Object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
