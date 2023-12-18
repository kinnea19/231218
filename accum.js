// function accum(s) {
//   const result = s
//     .toLowerCase()
//     .split("")
//     .map((value, idx) => {
//       const letter = value;
//       value = value.toUpperCase();
//       for (let i = 0; i < idx; i++) {
//         value += letter;
//       }
//       return value;
//     });

//   return result.join("-");
// }

// using String.prototype.repeat()

function accum(s) {
  return s
    .split("")
    .map((char, idx) => char.toUpperCase() + char.toLowerCase().repeat(idx))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
