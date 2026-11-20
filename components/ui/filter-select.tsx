import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './select'

const FilterSelect = ({options}:{options:string[]}) => {

    const selectOptions = options.map(option=>{
    return {
        label:option.slice(0,1).toUpperCase()+option.slice(1).toLowerCase(),
        value:option
    }
})

  return (
    <Select items={selectOptions}>
          <SelectTrigger className="w-fit rounded-full bg-black px-6 py-4 text-white">
            <SelectValue className="text-white" placeholder={selectOptions.at(1)?.label} />
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
  )
}

export default FilterSelect