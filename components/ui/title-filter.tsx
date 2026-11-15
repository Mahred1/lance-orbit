import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './select'

const TitleFilter = ({children,options}:{children:React.ReactNode,options:string[]}) => {

//      const selectOptions = [
//     { label: "All", value: "All" },
//     { label: "Completed", value: "Completed" },
//     { label: "Uncompleted", value: "Uncompleted" },
//   ]

const selectOptions = options.map(option=>{
    return {
        label:option.slice(0,1).toUpperCase()+option.slice(1).toLowerCase(),
        value:option
    }
})

  return (
    <div className="flex flex-col gap-2.5">
      {/* Search and Filter */}
      <div className="flex items-center justify-between">
        {/* Title */}
       <h3 className='text-lo-display-xs font-medium'>{children}</h3>
        {/* filter */}
        <Select items={selectOptions}>
          <SelectTrigger className="w-fit rounded-full bg-black px-6 py-4 text-white">
            <SelectValue className="text-white" placeholder="All" />
          </SelectTrigger>
          <SelectContent className="transition-[opacity,scale] rounded-lg duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            <SelectGroup>
              {selectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Line break */}
      <div className="w-full rounded-full border-b border-gray-200" />
    </div>
  )
}

export default TitleFilter