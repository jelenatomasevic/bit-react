import React from "react";
import UserList from "./UserList";
import { fetchUser } from "../service/ServiceUser";
import UserCard from "./UserCard";
import Header from "../Components/Header";

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetchUser().then(user => this.setState({ users: user }));
  }

  render() {
    if (this.props.isGrid) {
      return <UserCard users={this.state.users} />;
    }
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default UserPage;
