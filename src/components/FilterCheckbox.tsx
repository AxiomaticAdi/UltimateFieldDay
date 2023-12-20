import React from "react";

interface FilterCheckboxProps {
    filterName: string; // The name of the filter
    checked: boolean; // The current state of the checkbox
    setChecked: (value: boolean) => void; // Function to update the state
    label: string; // Display label for the checkbox
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
    filterName,
    checked,
    setChecked,
    label,
}) => {
    return (
        <div className="flex items-center text-base sm:text-sm">
            <input
                name={`${filterName}Checkbox`}
                type="checkbox"
                checked={checked}
                className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onChange={() => setChecked(!checked)}
                id={`setting-${filterName}`}
            />
            <label
                htmlFor={`setting-${filterName}`}
                className="ml-3 min-w-0 flex-1 text-gray-600"
            >
                {label}
            </label>
        </div>
    );
};

export default FilterCheckbox;
