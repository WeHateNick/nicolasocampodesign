import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <ul>
      <li>
        <a href="mailto:nick@wehatenick.com" target="_blank" alt="Contact">
          Contact
        </a>
      </li>
      <li>
        <a
          href="https://docs.google.com/document/d/1vtowt3y2xNGnp4uUEr8QYC11D1H6P8DU9K6s_ybeQd0"
          target="_blank"
          alt="Resume"
        >
          Resume
        </a>
      </li>
      <li>
        <a href="https://medium.com/nick-ocampo" target="_blank" alt="Writing">
          Writing
        </a>
      </li>
      <li>
        <a
          href="https://thewolfdesign.smugmug.com/Logos"
          target="_blank"
          alt="Logo gallery"
        >
          Logo gallery
        </a>
      </li>
      <li>
        <a href="https://github.com/WeHateNick" target="_blank" alt="Github">
          Github
        </a>
      </li>
    </ul>
  );
}
