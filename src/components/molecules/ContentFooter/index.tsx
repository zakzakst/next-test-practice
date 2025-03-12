import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentProps<"footer">;

export const ContentFooter = ({ className, ...rest }: Props) => {
  return <footer className={clsx(className, styles.module)} {...rest} />;
};
