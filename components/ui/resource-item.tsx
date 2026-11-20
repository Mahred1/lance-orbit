import { cn } from "cn"
import { Pencil, Trash } from "lucide-react"
type ResourceItemProps = {
  title: string
  description: string
}
const ResourceItem = ({ title, description }: ResourceItemProps) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-280 items-center justify-between rounded-xs border border-gray-300 bg-slate-200 px-3 py-1"
      )}
    >
      {/* title & description */}
      <div className="flex flex-col gap-[0.5px]">
        <h3 className="text-lo-sm font-semibold">{title}</h3>
        <p className="max-w-112.5 text-lo-xs leading-3.5 text-gray-600">
          {description}
        </p>
      </div>
      {/* actions */}
      <div className="flex gap-4">
        <button className="flex flex-col items-start">
          <Pencil className="size-6 stroke-1" />
          <span className="text-lo-xs">Edit</span>
        </button>
        <button className="flex flex-col items-center">
          <Trash className="size-6 stroke-rose-600 stroke-1" />
          <span className="text-lo-xs text-rose-600">Delete</span>
        </button>
      </div>
    </div>
  )
}

export default ResourceItem


