type CheckboxProps = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className="form-checkbox h-5 w-5 text-blue-600"
        onChange={() => onChange(value)}
      />
      <span className="font-medium text-gray-900">{label}</span>
    </label>
  );
};
