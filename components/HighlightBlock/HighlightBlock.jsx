import styles from "./HighlightBlock.module.scss";
import allContent from "./HighlightContent";

export default function Home({ type }) {
  const content = allContent[type];

  return (
    <section className={styles.section}>
      <p className={styles.section__header}>{content.intro}</p>
      <div className={styles["highlight-boxes"]}>
        <ul>
          {content.items.map(item => (
            <li>
              <h3>{item.label}</h3>
              <ul>
                {item.tools.map(tool => (
                  <li>{tool}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
