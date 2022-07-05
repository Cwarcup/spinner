// refactor spinner1.js to use a for loop to create the spinner

const arr = ['😐', '😔', '😕', '😖','😥', '😭'];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${arr[i]}   `);
  }, i * 200);
}