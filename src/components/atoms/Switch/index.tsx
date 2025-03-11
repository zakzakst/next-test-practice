import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  variant?: "small";
} & Omit<React.ComponentPropsWithRef<"input">, "type" | "role">;

export const Switch = ({ className, ...rest }: Props) => {
  return (
    <span className={clsx(className, styles.module)}>
      <input type="checkbox" role="switch" {...rest} />
      <span />
    </span>
  );
};
