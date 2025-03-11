import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
  disabled?: boolean;
} & React.ComponentPropsWithRef<"a">;

export const AnchorButton = ({
  className,
  theme = "dark",
  variant = "medium",
  disabled,
  ...rest
}: Props) => {
  return (
    <a
      className={clsx(className, styles.module)}
      aria-disabled={disabled}
      data-theme={theme}
      data-variant={variant}
      {...rest}
    />
  );
};
