import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
  ProgressValue,
} from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type ProjectCardProps = {
  image: string
  title: string
  description: string
  progressValue: number
  clientName: string
  clientLink: string
  date?: Date
}

const ProjectCard = ({
  image,
  title,
  description,
  progressValue,
  clientLink = "",
  clientName,
  date,
}: ProjectCardProps) => {
  return (
   <Link href={''}>
     <div className="w-70 overflow-clip rounded-md border-[1.5px] border-gray-200 bg-gray-100 drop-shadow-sm">
      {/* image */}
      <div className="relative h-35">
        <Image
          className="object-cover"
          fill
          src={image}
          alt={"Project Image"}
        ></Image>
      </div>
      {/* content */}
      <div className="flex flex-col gap-6 p-3.5 pt-2">
        {/* header and support */}
        <div className="flex flex-col gap-1">
          {title}
          <h2 className="text-lo-lg font-semibold"></h2>
          <p className="text-lo-xs text-gray-500">{description}</p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Progress Bar */}
          <Progress value={progressValue}>
            <ProgressValue />
            <ProgressTrack className="h-2 rounded-full bg-gray-200">
              <ProgressIndicator className={"rounded-full"} />
            </ProgressTrack>
          </Progress>

          {/* Name and date */}
          <div className="flex items-center justify-between text-lo-xs text-gray-500">
            <Link className="hover:text-gray-600" href={clientLink}>
              {clientName}
            </Link>
            <span>{date?.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
   </Link>
  )
}

export default ProjectCard
