import { Link } from "react-router-dom";

export default function App() {
    return (
        <div className="relative isolate min-h-screen overflow-hidden bg-gray-900">
            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                    style={{
                        clipPath:
                            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                    }}
                />
            </div>
            <div className="flex w-full justify-center">
                <div className="flex max-w-2xl flex-shrink-0 flex-col items-center justify-center pt-60 text-center">
                    <img className="h-12" src="/FieldDayLogo.svg" alt="logo" />
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Finding the right field day games made simple
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        The worlds largest searchable field day games repository
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            to="/games"
                            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Start Planning!
                        </Link>
                        <Link
                            to="/about"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            About <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
