import React, { Component } from "react";

class SideBar extends Component {
  toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

  render() {
    return (
      <aside id="sidebar">
        <div class="sidebar-header">
          <h3>Saga</h3>
        </div>
        <ul class="list-unstyled components">
          <p>Dummy Heading</p>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul class="list-unstyled CTAs" onClick={this.toggleSidebar.bind(this)}>
          <li>
            <a
              class="article"
            >
              Toggle sidebar
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
