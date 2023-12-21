interface RadioOption {
    label: string;
    value: string;
}

interface RadioOptionsProps {
    name: string;
    title: string;
    options: RadioOption[];
    description?: string;
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
}

function RadioOptions({
    name,
    title,
    options,
    description,
    value,
    onChange,
    required = false,
}: RadioOptionsProps) {
    return (
        <fieldset className="sm:col-span-3">
            <legend className="text-sm font-semibold leading-6">{title}</legend>
            {description && (
                <p className="mt-1 text-sm leading-6 text-gray-400">
                    {description}
                </p>
            )}
            <div className="mt-2 space-y-6">
                <div className="flex flex-col gap-1">
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center gap-x-3">
                            <input
                                id={`${name}-${option.value}`}
                                name={name}
                                type="radio"
                                value={option.value}
                                checked={value === option.value}
                                onChange={() => onChange(option.value)}
                                className="h-4 w-4 border-gray-300 bg-transparent text-indigo-600 focus:ring-indigo-600"
                                required={required}
                            />
                            <label
                                htmlFor={`${name}-${option.value}`}
                                className="block text-sm font-medium leading-6 "
                            >
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </fieldset>
    );
}

export default RadioOptions;
