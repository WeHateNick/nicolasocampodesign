import styles from "./HighlightBlock.module.scss";
import allContent from "./HighlightContent";
import moment from "moment";
import classnames from "classnames/bind";
let cn = classnames.bind(styles);

export default function Home({ type }) {
  const content = allContent[type];

  return (
    <section className={styles.section}>
      <p className={styles.section__header}>{content.intro}</p>
      <ul className={styles.highlight__boxes}>
        {content.items.map(item => (
          <li className={styles.highlight}>
            <div className={styles.highlight__icon}>
              <img src={item.icon} />
            </div>
            <h3>{item.label}</h3>
            {item.startYear && (
              <p>{moment().diff(`${item.startYear}-01-01`, "years")} years</p>
            )}
            <ul
              className={cn("highlight__tools", {
                "highlight__tools--active": item.active
              })}
            >
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
