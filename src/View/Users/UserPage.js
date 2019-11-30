import React from "react";
import UserList from "./UserList";
import { fetchUser } from "../service/ServiceUser";
import UserCard from "./UserCard";
import ActionButtons from "./ActionButtons";
import Search from "./Search";

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGrid: false,
      searchQuery: "",
      users: []
    };
  }

  componentDidMount() {
    this.loadPageData();
  }

  loadPageData = () => {
    fetchUser().then(user => this.setState({ users: user }));
  };

  changeLayout = () => {
    this.setState(prevState => {
      return {
        isGrid: !prevState.isGrid
      };
    });
  };

  onSearch = val => {
    this.setState({ searchQuery: val });
  };

  render() {
    const filteredUsers = this.state.users.filter(user =>
      user.getFullName().includes(this.state.searchQuery.toLowerCase())
    );

    const component = this.state.isGrid ? (
      <UserCard users={filteredUsers} />
    ) : (
      <UserList users={filteredUsers} />
    );

    return (
      <div>
        <div class="row">
          <Search onSearch={this.onSearch} />
          <ActionButtons
            onLayoutChange={this.changeLayout}
            onRefresh={this.loadPageData}
          />
        </div>

        <div>{component}</div>
      </div>
    );
  }
}

export default UserPage;
