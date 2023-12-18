function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((ele) => +ele);
}
console.log(digitize(35231));
