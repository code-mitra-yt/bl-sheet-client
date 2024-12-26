import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  text: string;
  fn: (searchText?: string) => void;
  placeholder: string;
}

const SearchInput = ({ text, fn, placeholder }: SearchInputProps) => {
  const [localSearch, setLocalSearch] = useState(text);
  const debouncedSearch = useDebounce(localSearch);

  useEffect(() => {
    fn(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Input
      className="w-full sm:max-w-sm h-fit p-0 m-0 px-3 py-1.5"
      type="text"
      placeholder={placeholder}
      value={localSearch}
      onChange={(e) => setLocalSearch(e.target.value)}
    />
  );
};

export default SearchInput;
