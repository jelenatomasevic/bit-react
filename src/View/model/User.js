class User {
  constructor(userData) {
    this.id = userData.id.value;
    this.email = userData.email;
    this.name = userData.name.first;
    this.lastname = userData.name.last;
    this.birthday = new Date(userData.dob.date);
    this.picture = userData.picture.thumbnail;
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
}
export default User;
