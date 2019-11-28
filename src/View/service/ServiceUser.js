import User from "../model/User";

const fetchUser = () => {
  const url = "https://randomuser.me/api/?results=15";

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      const myUsers = data.results.map(userData => {
        return new User(userData);
      });

      return myUsers;
    });
};
export { fetchUser };
