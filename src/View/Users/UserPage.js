import React from "react";
import UserList from "./UserList";
import { fetchUser } from "../service/ServiceUser";

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  loadUsers() {
    fetchUser().then(user => this.setState({ users: user }));
  }
  /*
 componentDidMount() {
    fetchUser().then(user => this.setState({ users: user }));
  }*/

  render() {
    return (
      <div>
        <button onClick={() => this.loadUsers()}>Click</button>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default UserPage;
