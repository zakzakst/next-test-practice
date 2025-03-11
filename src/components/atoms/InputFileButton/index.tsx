import { Button } from "@/components/atoms/Button";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  buttonProps: React.ComponentProps<typeof Button>;
  inputProps: React.ComponentPropsWithoutRef<"input"> & {
    [K in `data-${string}`]: string;
  };
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
};

export const InputFileButton = ({
  buttonProps,
  inputProps,
  className,
  ref,
}: Props) => {
  return (
    <div className={clsx(className, styles.module)}>
      <input aria-label="画像選択" type="file" ref={ref} {...inputProps} />
      <Button {...buttonProps} />
    </div>
  );
};
