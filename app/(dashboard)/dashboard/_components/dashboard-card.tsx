import React from "react"

type DasboardCardType = {
  title?: string
  value?: string
  metricValue?: string
  metricDesc?: string
  metricUnit?: string
}

const DashboardCard = ({
  title='',
  value='',
  metricValue='',
  metricDesc='',
  metricUnit='',
}: DasboardCardType) => {
  return (
    <div className="flex min-w-60 flex-col gap-2 rounded-lg border-[0.5px] border-gray-300 py-4 pr-3 pl-6">
      <h3 className="text-lo-md font-medium">{title}</h3>
      <h2 className="text-lo-display-md font-semibold">{value}</h2>

      <div className="flex items-center gap-1">
        <div className="grid place-items-center rounded-full bg-green-100 px-0.5 py-px">
          <span className="text-lo-xs font-semibold text-green-500">{`${metricValue}${metricUnit}`}</span>
        </div>
        <span className="text-lo-xs font-medium text-gray-400">
          {metricDesc}
        </span>
      </div>
    </div>
  )
}

export default DashboardCard
