import React, { ChangeEvent } from "react";

interface PlayerCountInputProps {
    min: number;
    max: number;
    value: number | undefined;
    onChange: (value: number | undefined) => void;
}

export default function PlayerCountInput({
    min,
    max,
    value,
    onChange,
}: PlayerCountInputProps) {
    const [validationError, setValidationError] =
        React.useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value ? parseInt(e.target.value) : undefined;

        // Validate the new value
        if (newValue !== undefined && (newValue < min || newValue > max)) {
            setValidationError(true);
        } else {
            setValidationError(false);
            onChange(newValue);
        }
    };

    return (
        <div className="sm:col-span-3">
            <div className="mt-2">
                <input
                    type="number"
                    min={min}
                    max={max}
                    value={value ?? ""}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            {validationError && (
                <div className="mt-2 text-sm text-red-500">
                    Value must be between {min} and {max}
                </div>
            )}
        </div>
    );
}
