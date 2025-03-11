import styles from "./styles.module.css";

type Props = {
  start: number;
  end: number;
  hitCount: number;
};

export const PaginationInfo = ({ start, end, hitCount }: Props) => {
  return (
    <section aria-label="現在表示中の一覧概要" className={styles.module}>
      <p>{`${hitCount}件中`}</p>
      <p role="presentation">/</p>
      <p>{`${start}〜${end}`}</p>
    </section>
  );
};
