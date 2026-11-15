import { Search } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select"

const SearchFilter = () => {
  const items = [
    { label: "All", value: "All" },
    { label: "Completed", value: "Completed" },
    { label: "Uncompleted", value: "Uncompleted" },
  ]

  return (
    <div className="flex flex-col gap-2.5">
      {/* Search and Filter */}
      <div className="flex items-center justify-between">
        {/* search */}
        <InputGroup className="w-[320px] rounded-lg bg-gray-50">
          <InputGroupAddon align="inline-start">
            <Search width={16} />
          </InputGroupAddon>
          <InputGroupInput
            className="text-gray-50"
            id="input-group-url"
            placeholder="Seach Projects"
          />
        </InputGroup>
        {/* filter */}
        <Select items={items}>
          <SelectTrigger className="w-fit rounded-full bg-black px-6 py-4 text-white">
            <SelectValue className="text-white" placeholder="All" />
          </SelectTrigger>
          <SelectContent className="transition-[opacity,scale] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
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

export default SearchFilter
