import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const TextFormField = <T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  placeholder = "please input data",
  disabled = false,
}: Props<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex">{label}</FormLabel>
          <FormControl>
            <Input
              value={field.value || ""}
              onChange={field.onChange}
              disabled={disabled}
              type={type}
              placeholder={placeholder}
              // {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextFormField;
