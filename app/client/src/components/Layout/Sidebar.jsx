import React, { Component } from "react";

class SideBar extends Component {
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

        <ul class="list-unstyled CTAs">
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              class="article"
            >
              Back to the article
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SideBar;
