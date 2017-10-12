function notSame(userID, password) {
  return userID != password;
}

function reqLength(userID, password) {
  return userID.length >= 6 && password.length >= 6;
}
/*Checks if the Username does not include the characters "!,$,#"*/
function reqChar(userID) {
  var x = userID;
  return !x.includes("!") && !x.includes("$") && !x.includes("#");
}

// Takes the password and checks if it contains at least one of the characters
function reqPass(password) {
  return password.includes("!") || password.includes("$") || password.includes("#");
}
// var x = password;

// Takes the password and sees if it is not "password"
function notPassword(password) {
  return password = password;
}

function oneDigit(password) {
  return password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9");
}
// Checks if the password contains a lower case and uppercase letter
function reqCase(password) {
  return password != password.toLowerCase() && password != password.toUpperCase();
}

function Check() {
  var pass = document.getElementById("passField").value;
  console.log("Password = " + pass);
  var user = document.getElementById("userField").value;
  console.log("Username = " + user);
  var notSameCheck = notSame(user, pass);
  var notReq = reqLength(user, pass);
  var notReqChar = reqChar(user);
  var notReqPass = reqPass(pass);
  var notNotPassword = notPassword(pass);
  var notOneDigit = oneDigit(pass);
  var notReqCase = reqCase(pass);
  var invalid = false;
  if (notSameCheck == false) {
    alert("Username and Password cannot be the same.")
    invalid = true;
  }
  if (notReq == false) {
    alert("Username and Password needs to be at least 6 characters.")
    invalid = true;
  }
  if (notReqChar == false) {
    alert("Username cannot contain the characters !, $, #")
    invalid = true;
  }
  if (notReqPass == false) {
    alert("Password must contain one of the characters !, $, #")
    invalid = true;
  }
  if (notNotPassword == false) {
    alert("Password cannot be the word password.")
    invalid = true;
  }
  if (notOneDigit == false) {
    alert("Password must contain at least one digit.")
    invalid = true;
  }
  if (notReqCase == false) {
    alert("Password must have one uppercase and one lowercase letter.")
    invalid = true;
  }
  if (invalid == false) {
    alert("Username and password are valid.")
  }
}
