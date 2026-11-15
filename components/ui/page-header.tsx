import React from "react"

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-lo-xl font-medium">{children}</h1>
}

export default PageHeader
