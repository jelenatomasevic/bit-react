class User {
  constructor(userData) {
    this.id = userData.id.value;
    this.email = userData.email;
    this.name = userData.name.first;
    this.lastname = userData.name.last;
    this.birthday = new Date(userData.dob.date);
    this.picture = userData.picture.thumbnail;
    this.pictureM = userData.picture.large;
  }
  fullName() {
    return this.name + " " + this.lastname;
  }
  getDate() {
    return (
      this.birthday.getDate() +
      "." +
      this.birthday.getMonth() +
      "." +
      this.birthday.getFullYear()
    );
  }

  getEmail() {
    var str = "";
    var str1 = "";
    var length1 = this.email.length;
    var index = this.email.indexOf("@");
    str = this.email.substring(0, index);
    for (let i = 0; i < Math.floor(str.length / 2) - 1; i++) {
      str1 += str[i];
    }
    str1 += "...";

    return (
      str[0] + "..." + str[index - 1] + this.email.substring(index, length1 - 1)
    );
    //str1 + this.email.slice(index);
  }
}
export default User;
