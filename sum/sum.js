function sum(a, b) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        !isFinite(a) ||
        !isFinite(b)) {
            return 'Error';
        }
    return a + b;
  }
  module.exports = sum;