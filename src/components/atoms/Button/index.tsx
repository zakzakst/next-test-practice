import { Ref } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
  ref?: Ref<HTMLButtonElement>;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  className,
  theme = "dark",
  variant = "medium",
  ref,
  ...rest
}: Props) => {
  return (
    <button
      ref={ref}
      className={clsx(className, styles.module)}
      data-theme={theme}
      data-variant={variant}
      {...rest}
    />
  );
};
