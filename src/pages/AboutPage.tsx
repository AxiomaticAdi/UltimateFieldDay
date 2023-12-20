import AppFrame from "../components/AppFrame";

const stats = [
    { name: "Games", stat: "16" },
    { name: "Users", stat: "2" },
];
export default function AboutPage() {
    return (
        <AppFrame>
            <div className="flex flex-col">
                <div className="px-6 py-24 text-white sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            About
                        </h2>
                        <p className="mt-6 text-lg leading-8">
                            Ultimate Field Day is a web application designed to
                            alleviate the stress of organizing field day events
                            and to introduce new, unique, and engaging games.
                        </p>
                    </div>
                </div>
                <div>
                    <dl className="flex items-center justify-evenly gap-2">
                        {stats.map((item) => (
                            <div
                                key={item.name}
                                className="w-2/5 overflow-hidden rounded-lg bg-indigo-600 px-4 py-5 text-center text-white shadow hover:bg-indigo-500 sm:p-6"
                            >
                                <dt className="truncate text-sm font-medium">
                                    {item.name}
                                </dt>
                                <dd className="mt-1 text-3xl font-semibold tracking-tight">
                                    {item.stat}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </AppFrame>
    );
}
