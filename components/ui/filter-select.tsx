import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"
import { cn } from "cn"

const FilterSelect = ({
  options,
  variant = "default",
}: {
  options: string[]
  variant?: "default" | "outline"
}) => {
  const selectOptions = options.map((option) => {
    return {
      label: option.slice(0, 1).toUpperCase() + option.slice(1).toLowerCase(),
      value: option,
    }
  })

  return (
    <Select items={selectOptions}>
      <SelectTrigger
        className={cn(
          variant == "default"
            ? "border-black bg-black text-white"
            : "border-gray-200 bg-slate-200 text-black",
          "w-fit rounded-full border px-6 py-4"
        )}
      >
        <SelectValue
          className={cn(variant==='default' ?"text-white":"text-black")}
          placeholder={selectOptions.at(1)?.label}
        />
      </SelectTrigger>
      <SelectContent className="rounded-lg transition-[opacity,scale] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
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
