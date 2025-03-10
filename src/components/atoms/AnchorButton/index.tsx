import { Ref } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
  disabled?: boolean;
  ref?: Ref<HTMLAnchorElement>;
} & React.ComponentPropsWithoutRef<"a">;

export const AnchorButton = ({
  className,
  theme = "dark",
  variant = "medium",
  disabled,
  ref,
  ...rest
}: Props) => {
  return (
    <a
      ref={ref}
      className={clsx(className, styles.module)}
      aria-disabled={disabled}
      data-theme={theme}
      data-variant={variant}
      {...rest}
    />
  );
};
