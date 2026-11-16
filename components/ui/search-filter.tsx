import { Search } from "lucide-react"
import React from "react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group"

const SearchFilter = ({children }:{children:React.ReactNode}) => {
  

  return (
    <div className="flex flex-col gap-2.5 w-full">
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
    {children}
      </div>
      {/* Line break */}
      <div className="w-full rounded-full border-b border-gray-200" />
    </div>
  )
}

export default SearchFilter
