import Link from "next/link";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light" | "transparent" | "blue" | "error";
  variant?: "small" | "medium" | "large";
  disabled?: boolean;
} & React.ComponentPropsWithRef<typeof Link>;

export const LinkButton = ({
  className,
  theme = "dark",
  variant = "medium",
  disabled,
  children,
  ...rest
}: Props) => {
  return (
    <Link
      className={clsx(className, styles.module)}
      aria-disabled={disabled}
      data-theme={theme}
      data-variant={variant}
      {...rest}
    >
      {children}
    </Link>
  );
};
