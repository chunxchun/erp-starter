import { Control, FieldValues, Path } from "react-hook-form";
import TextFormField from "./TextFormField";

interface Props<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}
const EmailFormField = <T extends FieldValues>({
  control,
  name,
  label = "Email",
  placeholder = "please input email",
  disabled,
}: Props<T>) => {
  return (
    <TextFormField
      control={control}
      name={name}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      type="email"
    />
  );
};

export default EmailFormField;
