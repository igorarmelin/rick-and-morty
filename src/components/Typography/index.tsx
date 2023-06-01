import React from "react"
import { Typography as TypographyMUI, TypographyProps } from "@material-ui/core"

const Typography = ({ children, ...props }: TypographyProps) => {
  return <TypographyMUI {...props}>{children}</TypographyMUI>
}

export default Typography
