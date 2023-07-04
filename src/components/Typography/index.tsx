import { Typography as TypographyMui, TypographyProps } from "@mui/material"

const Typography = ({
  children,
  variant = "body1",
  color = "#393e41",
  fontFamily = "montserrat",
  ...props
}: TypographyProps) => (
  <TypographyMui
    fontFamily={fontFamily}
    color={color}
    variant={variant}
    {...props}
  >
    {children}
  </TypographyMui>
)

export default Typography
