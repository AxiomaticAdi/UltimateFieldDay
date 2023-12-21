interface InputTextBoxProps {
    title: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    isRequired: boolean;
}

export default function InputTextBox({
    title,
    placeholder,
    value,
    onChange,
    isRequired,
}: InputTextBoxProps) {
    return (
        <div className="col-span-full">
            <label
                htmlFor={"inputGame" + title}
                className="block text-sm font-medium leading-6 "
            >
                {title}
            </label>
            <div className="mt-2">
                <textarea
                    id={"game" + title}
                    name={"game" + title}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={3}
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                    required={isRequired}
                />
            </div>
        </div>
    );
}
