class User {
  constructor(username = "", birthdate = 0, age = 0, email = "", password = "", valid = false) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = valid;
  }
}

module.exports = User;
