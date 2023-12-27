import { useMemo, useState } from "react";
import { Combobox } from "@headlessui/react";

interface AutoCompleteTextInputProps {
    placeholder: string;
    equipmentSet: Set<string>;
    chosenEquipment: string[];
    setChosenEquipment: (value: string[]) => void;
}

export default function AutoCompleteTextInput({
    placeholder,
    equipmentSet,
    chosenEquipment,
    setChosenEquipment,
}: AutoCompleteTextInputProps) {
    const [query, setQuery] = useState("");

    const handleSelect = (value: string) => {
        const newInput = new Set(chosenEquipment);
        if (newInput.has(value)) {
            newInput.delete(value);
        } else {
            newInput.add(value);
        }
        setChosenEquipment(Array.from(newInput));

        // Clear the query
        setQuery("");
    };

    const equipmentArray: string[] = useMemo(
        () => Array.from(equipmentSet),
        [equipmentSet],
    );

    const filterEquipment = (query: string, equipmentArray: string[]) => {
        return query === ""
            ? equipmentArray
            : equipmentArray.filter((equipment) =>
                  equipment.toLowerCase().includes(query.toLowerCase()),
              );
    };

    const filteredEquipment = useMemo(
        () => filterEquipment(query, equipmentArray),
        [query, equipmentArray],
    );

    return (
        <Combobox value={query}>
            <div className="relative">
                <Combobox.Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={placeholder}
                    className="block w-full rounded-md border-0 bg-transparent py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <Combobox.Options className="absolute z-50 max-h-80 scroll-py-2 divide-y divide-gray-500 overflow-y-auto rounded-md bg-indigo-800">
                    <ul className="text-sm text-white">
                        {filteredEquipment.map((equipment) => (
                            <Combobox.Option
                                key={equipment}
                                value={equipment}
                                className="flex justify-between rounded-md px-3 py-2 hover:bg-indigo-400 hover:text-white"
                                onClick={() => handleSelect(equipment)}
                            >
                                <span>{equipment}</span>
                                {chosenEquipment.includes(equipment) && (
                                    <span className="text-right text-white">
                                        ✓
                                    </span>
                                )}
                            </Combobox.Option>
                        ))}
                    </ul>
                </Combobox.Options>
            </div>
        </Combobox>
    );
}
