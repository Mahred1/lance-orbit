"use client"

import Image from "next/image"
import { useState } from "react"

type MessageCardProps = {
  title?: string
  message?: string
  onClose?: () => void
}

const MessageCard = ({
  title = "Message",
  message,
  onClose,
}: MessageCardProps) => {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <section className="relative h-fit w-full max-w-200 overflow-clip rounded-[16px] border-[1.5px] border-solid border-gray-200 bg-gray-100 px-6 pt-4 pb-6">
      <button
        type="button"
        aria-label="Dismiss message"
        onClick={() => {
          setDismissed(true)
          onClose?.()
        }}
        className="absolute top-2 right-4 size-6 cursor-pointer"
      >
        <Image src="/xbox-x.svg" alt="" width={20} height={20} />
      </button>

      <h2 className="mb-2.5 text-lo-display-xs leading-9 font-medium text-black">
        {title}
      </h2>

      <p className="text-lo-md leading-6 text-gray-600">{message}</p>
    </section>
  )
}

export default MessageCard
