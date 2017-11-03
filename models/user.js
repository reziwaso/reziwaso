const md5 = requirce('md5');

class User {
  construct(username, email, plainPassword) {
    this.username = username;
    this.email = email;
    this.plainPassword = plainPassword;
    this.password = md5(plainPassowrd);
    this.token = this.generateToken();
  }
  
  generateToken() {
    return md5('asdfghjlpoiuytrewqzxcvbnm');
  }
}

module.exports = User;
