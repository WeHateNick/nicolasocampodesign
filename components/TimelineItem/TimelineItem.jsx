import styles from "./TimelineItem.module.scss";

export default function TimelineItem({
  startYear,
  endYear,
  intro,
  companyName,
  children
}) {
  return (
    <div className={styles.timeline__item}>
      <p className={styles.section__header}>
        &mdash; {endYear ? `In ${endYear}` : "Presently"}
      </p>
      <p className={styles.timeline__intro}>{intro}</p>
      <h3 className={styles.timeline__header}>
        {companyName} {startYear && `(since ${startYear})`}
      </h3>
      {children}
    </div>
  );
}
