import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";

const filters = {
    setting: [
        { value: "Indoor", label: "Indoor", checked: false },
        { value: "Outdoor", label: "Outdoor", checked: false },
    ],
};
const sortOptions = [
    { name: "A - Z", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function FilterSection() {
    return (
        <div className="py-3">
            {/* Filters */}
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="grid items-center"
            >
                <h2 id="filter-heading" className="sr-only">
                    Filters
                </h2>
                <div className="relative col-start-1 row-start-1 py-4">
                    <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-indigo-400 px-4 text-sm sm:px-6 lg:px-8">
                        <div>
                            <Disclosure.Button className="group flex items-center font-medium text-gray-500 hover:text-gray-200">
                                <FunnelIcon
                                    className="mr-2 h-5 w-5 flex-none"
                                    aria-hidden="true"
                                />
                                Filters
                            </Disclosure.Button>
                        </div>
                        <div className="pl-6">
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-200"
                            >
                                Clear all
                            </button>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="rounded-b-lg border-t border-indigo-400 bg-slate-200 py-10">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                        <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                            <fieldset>
                                <legend className="font-bold">Setting</legend>
                                <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                    {filters.setting.map(
                                        (option, optionIdx) => (
                                            <div
                                                key={option.value}
                                                className="flex items-center text-base sm:text-sm"
                                            >
                                                <input
                                                    id={`setting-${optionIdx}`}
                                                    name="setting[]"
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    defaultChecked={
                                                        option.checked
                                                    }
                                                    onChange={(e) =>
                                                        onSettingFilterChange(
                                                            option.value,
                                                        )
                                                    }
                                                />
                                                <label
                                                    htmlFor={`setting-${optionIdx}`}
                                                    className="ml-3 min-w-0 flex-1 text-gray-600"
                                                >
                                                    {option.label}
                                                </label>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </fieldset>
                        </div>
                        <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6"></div>
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