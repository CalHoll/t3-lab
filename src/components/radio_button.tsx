type RadioButtonProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-3">
      <input
        type="radio"
        name={name}
        value={value}
        className="form-radio h-5 w-5 text-blue-600"
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="font-medium text-gray-900">{value}</span>
    </label>
  );
};
