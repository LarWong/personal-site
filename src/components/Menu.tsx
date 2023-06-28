import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Icon } from "@iconify/react";

type entry = {
  label: string;
  section: string;
  iconName: string;
};

const menuEntries: entry[] = [
  // label: text to display
  // section: hrefs
  // iconName: for icons
  {
    label: "Home",
    section: "#home",
    iconName: "bx-home",
  },
  {
    label: "Summary",
    section: "#summary",
    iconName: "bx-user",
  },
  {
    label: "Skills",
    section: "#skills",
    iconName: "bx-receipt",
  },
  {
    label: "Experience",
    section: "#experience",
    iconName: "bx-briefcase-alt",
  },
  {
    label: "Education",
    section: "#education",
    iconName: "bx-book",
  },
  {
    label: "Projects",
    section: "#projects",
    iconName: "bx-award",
  },
];

export const Menu = () => {
  const [show, setShow] = useState<boolean>(false);

  const _handleLinkState = (label: string) => {
    const menu = document.querySelectorAll('[id^="menu-"]');
    const currentLink = `menu-${label}`;
    console.log(window.location.hash);
    for (const entry of menu) {
      const classes = entry.classList;
      if (entry.id === currentLink) {
        classes.replace("inactive-link", "active-link");
      } else {
        classes.replace("active-link", "inactive-link");
      }
    }
  };

  return (
    <>
      <header className="l-header" id="header">
        <div className="bd-container bd-container-header">
          <span className="nav__logo">Menu</span>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShow(!show)}
          >
            <Icon className="bx" icon={"bx:grid-alt"} />
          </div>
        </div>
      </header>
      <Router basename="/">
        <Routes>
          <Route path="" element={<Navigate replace to="/#home" />} />
        </Routes>
        <nav className="nav">
          <div
            className={show ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              {menuEntries.map(({ label, section, iconName }) => (
                <li className="nav__item" key={label}>
                  <Link
                    className={`nav__link menu-link ${
                      window.location.pathname === "/" &&
                      window.location.hash === section
                        ? "active-link"
                        : "inactive-link"
                    }`}
                    id={`menu-${label}`}
                    onClick={(e) => {
                      _handleLinkState(label);
                      if (e !== undefined) {
                        window.location.hash = (
                          e.target as HTMLAnchorElement
                        ).hash;
                      }
                      setShow(!show);
                    }}
                    to={{ pathname: "/", hash: section }}
                  >
                    <Icon className="bx nav__icon" icon={`bx:${iconName}`} />
                    <div>{`${label}`}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Router>
    </>
  );
};
