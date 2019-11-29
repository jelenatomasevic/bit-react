import React from "react";
//import logo from "./logo.svg";
import Footer from "./View/Components/Footer";
import Header from "./View/Components/Header";
import Main from "./View/Components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGrid: false
    };
  }

  changeLayout = () => {
    this.setState(prevState => {
      return {
        isGrid: !prevState.isGrid
      };
    });
  };

  render() {
    return (
      <>
        <Header className="App-header" onChangeLayout={this.changeLayout} />
        <Main isGrid={this.state.isGrid} isRefreshed={this.state.isRefreshed} />
        <Footer />
      </>
    );
  }
}

export default App;
