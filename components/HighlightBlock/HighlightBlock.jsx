import styles from "./HighlightBlock.module.scss";
import allContent from "./HighlightContent";
import moment from "moment";

export default function Home({ type }) {
  const content = allContent[type];

  return (
    <section className={styles.section}>
      <p className={styles.section__header}>{content.intro}</p>
      <ul className={styles["highlight__boxes"]}>
        {content.items.map(item => (
          <li>
            <h3>{item.label}</h3>
            {item.startYear && (
              <p>{moment().diff(`${item.startYear}-01-01`, "years")} years</p>
            )}
            <ul className={styles.highlight__tools}>
              {item.tools.map(tool => (
                <li>{tool}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
