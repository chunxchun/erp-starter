import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { TimePicker } from "../ui/date-time-picker/time-picker";
import { Time } from "@internationalized/date";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  // placeholder?: string;
  // disabled?: boolean;
  isEditForm?: boolean;
}

const TimeFormField = <T extends FieldValues>({
  control,
  name,
  label,
  isEditForm = false,
}: // placeholder = "Pick a time",
// disabled = false,
Props<T>) => {
  // console.log("time form", defaultValue);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // console.log("field", field.value);
        return (
          <FormItem>
            <FormLabel className="flex">{label}</FormLabel>
            <FormControl>
              {isEditForm ? (
                field.value && (
                  <TimePicker
                    defaultValue={
                      new Time(
                        Number(field.value.split(":")[0]),
                        Number(field.value.split(":")[1])
                      )
                    }
                    onChange={(v) => {
                      const parsedTime = `${v.hour
                        .toString()
                        .padStart(2, "0")}:${v.minute
                        .toString()
                        .padStart(2, "0")}`;
                      console.log(parsedTime);
                      field.onChange(parsedTime);
                    }}
                  />
                )
              ) : (
                <TimePicker
                  onChange={(v) => {
                    const parsedTime = `${v.hour
                      .toString()
                      .padStart(2, "0")}:${v.minute
                      .toString()
                      .padStart(2, "0")}`;
                    console.log(parsedTime);
                    field.onChange(parsedTime);
                  }}
                />
              )}
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
export default TimeFormField;
