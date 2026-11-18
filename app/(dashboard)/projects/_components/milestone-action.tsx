import { Button } from "@/components/ui/button"
import { cn } from "cn"
import { CircleCheck, Trash, Undo2 } from "lucide-react"
import React from "react"

type MilestoneActionProps={
    type: "remove" |"undo"|"complete"
}

const MilestoneAction = ({type}:MilestoneActionProps) => {
  const actionConfig = {
    remove: {
      style: "bg-red-100 border-red-200 text-rose-600 hover:bg-red-200",
      icon: <Trash className="size-3" strokeWidth={1} size={12} /> ,
      label: "Remove",
    },
    undo: {
      style: "bg-gray-100 border-gray-300 text-gray-600 hover:bg-gray-200",
      icon: <Undo2 className="size-3" strokeWidth={1} size={12} />,
      label: "Undo",
    },
    complete: {
      style: "bg-black border-black text-white",
      icon: <CircleCheck  className="size-3" strokeWidth={1} size={12} />,
      label: "Complete",
    },
  }
  return (
    <Button className={cn(actionConfig[type].style,"flex items-center gap-1 rounded-full border px-4 py-2")}>
      {actionConfig[type].icon}
      <span className={cn("text-lo-xs font-lo-regular")}>{actionConfig[type].label}</span>
    </Button>
  )
}

export default MilestoneAction
