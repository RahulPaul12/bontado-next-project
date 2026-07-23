import * as React from "react"
function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className="db-card"
      {...props}
    />
  )
}


export {
  Card
}
