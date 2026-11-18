import React from "react"

const TitleButton = ({
  children,
  title,
}: {
  children?: React.ReactNode
  title: string
}) => {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* Search and Filter */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h3 className="text-lo-lg font-medium">{title}</h3>
        {/* filter */}
        {children}
      </div>
      {/* Line break */}
      <div className="w-full rounded-full border-b border-gray-200" />
    </div>
  )
}

export default TitleButton
