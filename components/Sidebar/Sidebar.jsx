import { useState } from "react";
import styles from "./Sidebar.module.scss";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classnames from "classnames/bind";
let cn = classnames.bind(styles);

export default function Sidebar() {
  const [collapsed, collapse] = useState(true);
  return (
    <nav className={styles.sidebar}>
      <button
        type="button"
        className={styles["menu-toggle"]}
        onClick={() => {
          collapse(!collapsed);
        }}
      >
        Menu{" "}
        <span className={styles["menu-toggle__icon"]}>
          <ChevronDownIcon />
        </span>
      </button>
      <ul
        className={cn("sidebar__list", {
          "sidebar__list--collapsed": collapsed
        })}
      >
        <li className={styles.sidebar__item}>
          <a href="mailto:nick@wehatenick.com" target="_blank" alt="Contact">
            Contact
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="https://docs.google.com/document/d/1vtowt3y2xNGnp4uUEr8QYC11D1H6P8DU9K6s_ybeQd0"
            target="_blank"
            alt="Resume"
          >
            Resume
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="https://medium.com/nick-ocampo"
            target="_blank"
            alt="Writing"
          >
            Writing
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="https://thewolfdesign.smugmug.com/Logos"
            target="_blank"
            alt="Logo gallery"
          >
            Logo gallery
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a href="https://github.com/WeHateNick" target="_blank" alt="Github">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}
