class User {
  construct(username, email, plainPassword) {
    this.username = username;
    this.email = email;
    this.plainPassword = plainPassword;
  }
}

module.exports = User;
