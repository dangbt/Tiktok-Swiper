import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  activated?: boolean
}

export default function Icons({ children, activated, ...rest }: Props) {
  return (
    <div className="flex flex-col items-center" {...rest}>
      {children}
    </div>
  )
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

function Text({ children, ...rest }: TextProps) {
  return <p {...rest}>{children}</p>
}

Icons.Text = Text