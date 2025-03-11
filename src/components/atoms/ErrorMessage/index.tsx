import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"p">;

export const ErrorMessage = ({ className, ...rest }: Props) => {
  return (
    <p
      className={clsx(className, styles.module)}
      role="alert"
      aria-live="off"
      {...rest}
    />
  );
};
