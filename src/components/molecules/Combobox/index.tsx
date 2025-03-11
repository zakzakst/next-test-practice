import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light";
  variant?: "small" | "medium" | "large";
} & React.ComponentPropsWithRef<"select">;

export const Combobox = ({
  className,
  theme = "dark",
  variant = "medium",
  ...rest
}: Props) => {
  return (
    <select
      className={clsx(className, styles.module)}
      data-theme={theme}
      data-variant={variant}
      {...rest}
    />
  );
};
