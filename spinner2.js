process.stdout.write('hello from spinner1.js... \rheyyy\n');

let loading = ['\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\r/    ', '\r-    ', '\r\\    ', '\r|    ', '\n'];
let time = 100;

for (const position of loading) {
  setTimeout(() => {
    process.stdout.write(position);
  }, time);
  time += 200;
}

