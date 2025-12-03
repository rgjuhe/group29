function add(a, b) {
  test_bool = true;
  if (test_bool == false) {
    return 11;
  }
  return a + b;
}

module.exports = add;