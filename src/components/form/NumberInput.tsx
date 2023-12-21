import React, { ChangeEvent } from "react";

interface NumberInputProps {
    label: string;
    name: string;
    placeholder: string;
    min: number;
    max: number;
    value: number | undefined;
    onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
    label,
    name,
    placeholder,
    min,
    max,
    value,
    onChange,
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Convert the input value to a number and call the onChange prop
        onChange(parseInt(e.target.value));
    };

    return (
        <div className="sm:col-span-3">
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6"
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    type="number"
                    id={name}
                    name={name}
                    min={min}
                    max={max}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="block w-1/2 rounded-md border-0 bg-transparent py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

export default NumberInput;
