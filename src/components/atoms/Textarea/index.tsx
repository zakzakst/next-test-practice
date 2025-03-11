import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"textarea">;

export const Textarea = ({ className, ...rest }: Props) => {
  return <textarea className={clsx(className, styles.module)} {...rest} />;
};
