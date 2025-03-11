import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"p">;

export const DescriptionMessage = ({ className, ...rest }: Props) => {
  return <p {...rest} className={clsx(className, styles.module)} />;
};
