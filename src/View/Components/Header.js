import React from "react";

const Header = props => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="center brand-logo">
          BIT PERSON
        </a>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">About</a>
          </li>

          <li>
            <a onClick={props.isRefreshed} href="collapsible.html">
              <i class="material-icons">refresh</i>
            </a>
          </li>
          <li>
            <a onClick={props.onChangeLayout}>
              <i class="material-icons">view_module</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
