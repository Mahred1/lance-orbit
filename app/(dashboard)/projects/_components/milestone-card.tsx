import { CircleCheck } from "lucide-react"
import React from "react"
import MilestoneAction from "./milestone-action"

const MilestoneCard = () => {
  return (
    <div className="flex h-fit w-full gap-2.5 items-start max-w-180">
      {/* line and check */}
      <div className="relative self-stretch overflow-clip">
        <CircleCheck />
        <div className="absolute top-5.75 left-[45%] h-full border-l-2 border-black" />
      </div>
      {/* content */}
      <div className="w-full">
        {/* title and buttons */}
        <div className="mb-2.5 flex items-start justify-between">
          <h3 className="text-lo-sm font-semibold">Phase 1</h3>
          <div className="flex items-center gap-2">
            <MilestoneAction type="undo"></MilestoneAction>
            <MilestoneAction type="remove"></MilestoneAction>
          </div>
        </div>
        <p className="text-xs max-w-110 pb-8 text-gray-500">
          Finish before the give me atep by step instruction on hw to build this
          n8n automation ,iclude what node to use what to name it and how to
          configure it, if there is something i need to do outside Finish before
          the give me atep by step instruction on hw to build this n8n
          automation.
        </p>
      </div>
    </div>
  )
}

export default MilestoneCard
