let pro = new Promise((resolve, reject) => {
  let a = prompt("enter the number");
  if (a % 2 == 0) {
    resolve("even number");
  } else {
    reject("odd number");
  }
});
pro
  .then((message) => {
    console.log(`im then method ${message}`);
  })
  .catch((message) => {
    console.log(`im then method ${message}`);
  });
