import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Options } from "@/types";

interface SelectField {
  field: any;
  options: Options[];
}

const SelectField = ({ field, options }: SelectField) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="focus-visible:ring-transparent w-full">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {options.map((op) => (
          <SelectItem
            key={op.value}
            className="cursor-pointer"
            value={op.value}
          >
            {op.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectField;
