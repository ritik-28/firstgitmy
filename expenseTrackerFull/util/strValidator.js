function isStrValidator(str) {
  console.log("validator running");
  if (str == undefined || str.length == 0) {
    return true;
  }
}

module.exports = isStrValidator;
