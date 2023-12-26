import { useState } from "react";
import { Combobox } from "@headlessui/react";

interface AutoCompleteTextInputProps {
    equipmentSet: Set<string>;
}

export default function AutoCompleteTextInput({
    equipmentSet,
}: AutoCompleteTextInputProps) {
    const [selectedInputs, setSelectedInputs] = useState<string[]>([]);
    const [query, setQuery] = useState("");

    const equipmentArray = Array.from(equipmentSet);

    const filteredEquipment =
        query === ""
            ? equipmentArray
            : equipmentArray.filter((equipment) => {
                  return equipment.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <Combobox value={selectedInputs} onChange={setSelectedInputs}>
            <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Include"
                className="block w-full rounded-md border-0 bg-transparent py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <Combobox.Options className="max-h-80 scroll-py-2 divide-y divide-gray-500 overflow-y-auto rounded-md bg-indigo-800 bg-opacity-25">
                <ul className="text-sm text-gray-700">
                    {filteredEquipment.map((equipment) => (
                        <Combobox.Option
                            key={equipment}
                            value={equipment}
                            className="flex items-center rounded-md px-3 py-2 hover:bg-indigo-400 hover:text-white"
                        >
                            {equipment}
                        </Combobox.Option>
                    ))}
                </ul>
            </Combobox.Options>
        </Combobox>
    );
}
