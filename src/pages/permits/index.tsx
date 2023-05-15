import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

type RadioButtonProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, onChange }) => {
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

type CheckboxProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  value,
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
      <span className="font-medium text-gray-900">{value}</span>
    </label>
  );
};

const WorkType: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">
        Is the work inside or outside?
      </p>
      <RadioButton name="workType" value="Interior" onChange={onChange} />
      <RadioButton name="workType" value="Exterior" onChange={onChange} />
    </div>
  );
};

const InteriorWork: React.FC<{ onChange: (value: string[]) => void }> = ({
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    console.log('handleCheckboxChange, value: ', value);
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold text-black">
        What interior work are you doing?
      </p>
      <Checkbox
        name="interiorWork"
        value="New bathroom"
        checked={selected.includes('New bathroom')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="interiorWork"
        value="New laundry room"
        checked={selected.includes('New laundry room')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="interiorWork"
        value="Bathroom remodel"
        checked={selected.includes('Bathroom remodel')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="interiorWork"
        value="Other"
        checked={selected.includes('Other')}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

const ExteriorWork: React.FC<{ onChange: (value: string[]) => void }> = ({
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
    onChange(selected);
  };

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold">What exterior work are you doing?</p>
      <Checkbox
        name="exteriorWork"
        value="Garage door replacement"
        checked={selected.includes('Garage door replacement')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Work on exterior doors"
        checked={selected.includes('Work on exterior doors')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Re-roofing"
        checked={selected.includes('Re-roofing')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Building fences less than 6 feet"
        checked={selected.includes('Building fences less than 6 feet')}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        name="exteriorWork"
        value="Other"
        checked={selected.includes('Other')}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

const Permitting: React.FC = () => {
  const [workType, setWorkType] = useState<string>('');
  const [interiorWork, setInteriorWork] = useState<string[]>([]);
  const [exteriorWork, setExteriorWork] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');

  React.useEffect(() => {
    if (workType === 'Interior') {
      if (
        interiorWork.includes('New bathroom') ||
        interiorWork.includes('New laundry room')
      ) {
        setResult('OTC review process with plans is required');
      } else if (interiorWork.length !== 0) {
        setResult('An OTC review process without plans is required');
      } else {
        setResult('');
      }
    } else if (workType === 'Exterior') {
      if (exteriorWork.includes('Other')) {
        setResult('An in-house review process is required.');
      } else if (
        exteriorWork.includes('Garage door replacement') ||
        exteriorWork.includes('Work on exterior doors')
      ) {
        setResult('OTC review process with plans is required');
      } else if (exteriorWork.includes('Re-roofing')) {
        setResult('OTC review process without plans is required');
      } else if (exteriorWork.includes('Building fences less than 6 feet.')) {
        setResult('No building permit is required');
      } else {
        setResult('');
      }
    }
    console.log('interiorWork ', interiorWork);
  }, [workType, interiorWork, exteriorWork]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-96 space-y-5 rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-2xl font-bold text-blue-700">
          Work Type Selection
        </h1>
        <WorkType onChange={setWorkType} />
        {workType === 'Interior' && <InteriorWork onChange={setInteriorWork} />}
        {workType === 'Exterior' && <ExteriorWork onChange={setExteriorWork} />}
        <p className="text-xl text-blue-700">{result}</p>
      </div>
    </div>
  );
};

export default Permitting;
