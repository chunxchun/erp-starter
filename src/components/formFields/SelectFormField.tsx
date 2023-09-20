import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { CreateEmployeeType, EmployeeType } from "@/types/employeeType";
import React, { useEffect, useState } from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import { supabase } from "@/supabaseClient";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

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
          <Select onValueChange={field.onChange} defaultValue={field.value}>
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
