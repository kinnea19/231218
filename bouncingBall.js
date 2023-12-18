function bouncingBall(h, bounce, window) {
  if (h < 0 || bounce < 0 || bounce >= 1 || window >= h) return -1;
  let count = 1;
  while (h * bounce > window) {
    count += 2;
    h *= bounce;
  }
  return count;
}

console.log(bouncingBall(30, 0.75, 1.5));
