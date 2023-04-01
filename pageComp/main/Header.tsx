import React from "react";

function Header() {
  return (
    <header>
      <h1 className="logo">Self Study</h1>
      <nav className="list_menu">
        <ul>
          <li>
            <a href="menu_schedule.html" target="_blank">
              Schedule
            </a>
          </li>
          <li>
            <a href="menu_subject.html" target="_blank">
              Subject
            </a>
          </li>
          <li>
            <a href="menu_report.html" target="_blank">
              Report
            </a>
          </li>
          <li>
            <a href="menu_article.html" target="_blank">
              Article
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
