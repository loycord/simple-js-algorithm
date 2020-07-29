// G.C.D: Greatest Common Divisor
function gcd(p, q) {
  if (q === 0) return p;
  else return gcd(q, p % q);
}

module.exports = gcd;
