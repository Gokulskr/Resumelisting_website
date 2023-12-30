function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Iam java script");
    }, 3000);
  });
}
async function msg() {
  console.log("iam async function");
  let msg1 = await hello();
  console.log("message", msg1);
}
msg();
