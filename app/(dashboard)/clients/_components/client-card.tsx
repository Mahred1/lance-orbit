import { Button } from "@/components/ui/button"
import Image from "next/image"

type ClientCardProps = {
  name: string
  numberOfProjects: number
  paidAmount: string | number
  imageUrl: string
}

const ClientCard = ({
  name,
  numberOfProjects,
  paidAmount,
  imageUrl,
}: ClientCardProps) => {
  return (
    <article className="relative flex w-70 flex-col items-center overflow-hidden rounded-md border-[1.5px] border-gray-200 bg-gray-100 px-3 pt-19 pb-8">
      {/* Cover banner */}
      <div className="absolute inset-x-0 top-0 h-30 overflow-hidden">
        <Image
          src="/client-card-banner.png"
          alt=""
          fill
          className="object-cover opacity-85"
          sizes="280px"
        />
        <div className="absolute inset-0 bg-black/24" />
      </div>

      <div className="relative flex w-full flex-col items-center gap-14">
        {/* Profile */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="relative size-20 shrink-0 rounded-full shadow-[0_0_0_9px_rgba(145,145,145,0.12)]">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="rounded-full object-cover"
              sizes="80px"
            />
          </div>
          <h2 className="text-lo-lg leading-7 font-lo-medium whitespace-nowrap text-black">
            {name}
          </h2>
        </div>

        {/* Details */}
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center justify-between px-8">
            <div className="flex flex-col items-center">
              <span className="text-lo-lg leading-7 font-lo-medium text-black">
                {numberOfProjects}
              </span>
              <span className="text-lo-xs leading-4.5 font-lo-regular text-gray-500">
                Projects
              </span>
            </div>

            <div className="flex size-7 items-center justify-center">
              <Image
                src="/client-card-divider.svg"
                alt=""
                width={27}
                height={1}
                className="rotate-90"
              />
            </div>

            <div className="flex flex-col items-center">
              <span className="text-lo-lg leading-7 font-lo-medium text-black">
                ${paidAmount}
              </span>
              <span className="text-lo-xs leading-4.5 font-lo-regular text-gray-500">
                Paid
              </span>
            </div>
          </div>

          <Button
            type="button"
            className="h-auto w-full rounded-[4px] bg-black px-8 py-2 text-lo-xs font-normal text-white"
          >
            Add To Project
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ClientCard
