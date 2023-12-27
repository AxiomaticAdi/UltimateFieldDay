import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import FilterCheckbox from "./FilterCheckbox";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import AutoCompleteTextInput from "./AutoCompleteTextInput";
import EquipmentBadge from "./EquipmentBadge";
import PlayerCountInput from "./PlayerCountInput";

const sortOptions = [{ name: "A - Z", href: "#", current: true }];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

interface FilterSection {
    indoorFilter: boolean;
    setIndoorFilter: (value: boolean) => void;
    outdoorFilter: boolean;
    setOutdoorFilter: (value: boolean) => void;
    lowActivityFilter: boolean;
    setLowActivityFilter: (value: boolean) => void;
    mediumActivityFilter: boolean;
    setMediumActivityFilter: (value: boolean) => void;
    highActivityFilter: boolean;
    setHighActivityFilter: (value: boolean) => void;

    equipmentSet: Set<string>;
    includedEquipmentFilter: string[];
    setIncludedEquipmentFilter: (value: string[]) => void;
    excludedEquipmentFilter: string[];
    setExcludedEquipmentFilter: (value: string[]) => void;

    playerCountFilter: number | undefined;
    setPlayerCountFilter: (value: number) => void;

    resetFilters: () => void;
}

export default function FilterSection({
    indoorFilter,
    setIndoorFilter,
    outdoorFilter,
    setOutdoorFilter,
    lowActivityFilter,
    setLowActivityFilter,
    mediumActivityFilter,
    setMediumActivityFilter,
    highActivityFilter,
    setHighActivityFilter,

    equipmentSet,
    includedEquipmentFilter,
    setIncludedEquipmentFilter,
    excludedEquipmentFilter,
    setExcludedEquipmentFilter,

    playerCountFilter,
    setPlayerCountFilter,

    resetFilters,
}: FilterSection) {
    // Animation
    const [parentFilterSection] = useAutoAnimate();

    return (
        <div className="py-3">
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="grid items-center"
                ref={parentFilterSection}
            >
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>
                <div className="relative col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-indigo-400 px-4 text-sm sm:px-6 lg:px-8">
                        <Disclosure.Button className="group flex items-center font-medium text-gray-500 hover:text-gray-200">
                            <FunnelIcon
                                className="mr-2 h-5 w-5 flex-none"
                                aria-hidden="true"
                            />
                            Filters
                        </Disclosure.Button>
                        <div className="pl-6">
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-200"
                                onClick={resetFilters}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="rounded-b-lg border-t border-indigo-400 bg-slate-200 py-10">
                    <div className="flex flex-row flex-wrap gap-y-4">
                        <fieldset className="px-4">
                            <legend className="font-bold">Setting</legend>
                            <div className="flex flex-col gap-2 pt-2">
                                <FilterCheckbox
                                    filterName={"indoorFilterFilter"}
                                    checked={indoorFilter}
                                    setChecked={setIndoorFilter}
                                    label={"Indoor"}
                                />
                                <FilterCheckbox
                                    filterName={"outdoorFilter"}
                                    checked={outdoorFilter}
                                    setChecked={setOutdoorFilter}
                                    label={"Outdoor"}
                                />
                            </div>
                        </fieldset>
                        <fieldset className="px-4">
                            <legend className="font-bold">
                                Activity Level
                            </legend>
                            <div className="flex flex-col gap-2 pt-2">
                                <FilterCheckbox
                                    filterName={"lowActivityFilter"}
                                    checked={lowActivityFilter}
                                    setChecked={setLowActivityFilter}
                                    label={"Low"}
                                />
                                <FilterCheckbox
                                    filterName={"mediumActivityFilter"}
                                    checked={mediumActivityFilter}
                                    setChecked={setMediumActivityFilter}
                                    label={"Medium"}
                                />
                                <FilterCheckbox
                                    filterName={"highActivityFilter"}
                                    checked={highActivityFilter}
                                    setChecked={setHighActivityFilter}
                                    label={"High"}
                                />
                            </div>
                        </fieldset>
                        <fieldset className="px-4">
                            <legend className="font-bold">Equipment</legend>
                            {includedEquipmentFilter.length > 0 && (
                                <>
                                    <p className="block pt-1 text-sm font-medium leading-6 text-gray-700">
                                        Included:
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {includedEquipmentFilter.map(
                                            (equipment) => (
                                                <EquipmentBadge
                                                    key={equipment}
                                                    color="green"
                                                    equipment={equipment}
                                                    equipmentList={
                                                        includedEquipmentFilter
                                                    }
                                                    setEquipmentList={
                                                        setIncludedEquipmentFilter
                                                    }
                                                />
                                            ),
                                        )}
                                    </div>
                                </>
                            )}

                            {excludedEquipmentFilter.length > 0 && (
                                <>
                                    <p className="block pt-1 text-sm font-medium leading-6 text-gray-700">
                                        Excluded:
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {excludedEquipmentFilter.map(
                                            (equipment) => (
                                                <EquipmentBadge
                                                    key={equipment}
                                                    color="red"
                                                    equipment={equipment}
                                                    equipmentList={
                                                        excludedEquipmentFilter
                                                    }
                                                    setEquipmentList={
                                                        setExcludedEquipmentFilter
                                                    }
                                                />
                                            ),
                                        )}
                                    </div>
                                </>
                            )}

                            <div className="flex flex-col gap-2 pt-2">
                                <AutoCompleteTextInput
                                    placeholder="Include"
                                    equipmentSet={equipmentSet}
                                    chosenEquipment={includedEquipmentFilter}
                                    setChosenEquipment={
                                        setIncludedEquipmentFilter
                                    }
                                />
                                <AutoCompleteTextInput
                                    placeholder="Exclude"
                                    equipmentSet={equipmentSet}
                                    chosenEquipment={excludedEquipmentFilter}
                                    setChosenEquipment={
                                        setExcludedEquipmentFilter
                                    }
                                />
                            </div>
                        </fieldset>
                        <fieldset className="px-4">
                            <legend className="font-bold">Player count</legend>
                            <div className="flex flex-col gap-2">
                                <PlayerCountInput
                                    min={2}
                                    max={100}
                                    value={playerCountFilter}
                                    onChange={setPlayerCountFilter}
                                />
                            </div>
                        </fieldset>
                    </div>
                </Disclosure.Panel>
                <div className="col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                        <Menu as="div" className="relative inline-block">
                            <div className="flex">
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-500 hover:text-gray-200">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-slate-200 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current
                                                                ? "font-medium text-gray-900"
                                                                : "text-gray-500",
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm",
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </Disclosure>
        </div>
    );
}
