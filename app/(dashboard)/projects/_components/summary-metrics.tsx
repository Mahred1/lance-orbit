
type SummaryMetricsProps = {
  budget: string | number
  paid: string | number
  remaining: string | number
}

type MetricProps = {
  label: string
  value: string | number
}

const Metric = ({ label, value }: MetricProps) => (
 <div className=" flex flex-col items-start gap-2">
    <p className="text-lo-md font-lo-medium leading-6">{label}</p>
    <p className="text-lo-display-md font-lo-semibold leading-11 tracking-[-0.72px]">
      ${value}
    </p>
  </div>
)

const Divider = () => (
  <div
    className="border-l-[1.5px] border-black h-[50%] roundedfull"
  >
   
  </div>
)

const SummaryMetrics = ({ budget, paid, remaining }: SummaryMetricsProps) => {
  return (
    <div
      className="flex h-29 w-full items-center max-w-130 justify-between border border-solid border-gray-300 bg-gray-100 px-6"
     
    >
      <Metric label="Budget" value={budget} />
      <Divider />
      <Metric label="Paid" value={paid}/>
      <Divider />
      <Metric label="Remaining" value={remaining}/>
    </div>
  )
}

export default SummaryMetrics
