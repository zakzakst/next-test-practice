import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"input">;

export const Textbox = ({ className, ...rest }: Props) => {
  return (
    <input className={clsx(className, styles.module)} type="text" {...rest} />
  );
};
