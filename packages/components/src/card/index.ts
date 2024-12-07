import { tcva, type VariantProps } from "@nyanpasu/material-design-libs";

export const cardVariants = tcva(["rounded-3xl"], {
  variants: {
    variant: {
      basic: ["shadow bg-surface"],
      raised: ["shadow bg-primary bg-opacity-10"],
      stroked: ["border bg-surface"],
    },
  },
  defaultVariants: {
    variant: "stroked",
  },
});

export interface CardVariantsProps extends VariantProps<typeof cardVariants> {}

export const cardContentVariants = tcva(["flex flex-col gap-4 p-4"]);

export interface CardContentVariantsProps
  extends VariantProps<typeof cardContentVariants> {}

export const cardHeaderVariants = tcva(
  ["flex items-center gap-4 text-xl", "px-4"],
  {
    variants: {
      divider: {
        true: ["border-b py-4"],
        false: ["pt-4"],
      },
    },
    defaultVariants: {
      divider: false,
    },
  },
);

export interface CardHeaderVariantsProps
  extends VariantProps<typeof cardHeaderVariants> {}

export const cardFooterVariants = tcva(
  ["flex flex-row-reverse items-center gap-4", "px-2"],
  {
    variants: {
      divider: {
        true: ["border-t py-2"],
        false: ["pb-2"],
      },
    },
    defaultVariants: {
      divider: false,
    },
  },
);

export interface CardFooterVariantsProps
  extends VariantProps<typeof cardFooterVariants> {}