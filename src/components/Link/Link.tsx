import { VariantProps, cva } from "class-variance-authority";
import { AnchorHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface LinkProps
  extends AnchorHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof anchorVariants> {
  children: ReactNode;
  link?: string;
}

function Link({ children, className, variant, link = "#" }: LinkProps) {
  return (
    <a href={link} className={cn(anchorVariants({ variant, className }))}>
      <span className='font-medium text-body-l'>{children}</span>
    </a>
  );
}

const anchorVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "text-base",
      borderBlue: "border-2 border-blue-600 rounded-3xl px-6 py-2",
      danger: "border-2 border-white bg-red text-white hover:bg-red-800",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default Link;
