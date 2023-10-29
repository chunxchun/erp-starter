import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/supabaseClient";
import { useEffect, useState } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  resources: string;
  selectKey: string;
  placeholder?: string;
  disabled?: boolean;
}

const SelectFormField = <T extends FieldValues>({
  control,
  name,
  label,
  resources,
  selectKey,
  placeholder = "please select",
  disabled = false,
}: Props<T>) => {
  const [options, setOptions] = useState<T[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from(resources).select();
      if (data) {
        setOptions(data);
      }
    };

    getData();
  }, [supabase, setOptions]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="flex">{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option[selectKey]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectFormField;
