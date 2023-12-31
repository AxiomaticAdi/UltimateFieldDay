import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export default function SearchBar({
    searchQuery,
    setSearchQuery,
}: SearchBarProps) {
    return (
        <div className="relative flex items-center justify-center">
            <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-500"
                aria-hidden="true"
            />
            <input
                id="search-field"
                className="block rounded-md border-0 bg-transparent py-1.5 pl-8 text-center text-white shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-center placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                placeholder="Search..."
                type="search"
                name="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSubmit={(e) => e.preventDefault()}
            />
        </div>
    );
}
