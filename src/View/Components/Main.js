import React from "react";
import UserPage from "../Users/UserPage";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <UserPage isGrid={this.props.isGrid} />
      </main>
    );
  }
}

export default Main;
