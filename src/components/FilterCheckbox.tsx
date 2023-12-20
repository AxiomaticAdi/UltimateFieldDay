import React from "react";

interface FilterCheckboxProps {
    filterName: string;
    checked: boolean;
    setChecked: (value: boolean) => void;
    label: string;
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
