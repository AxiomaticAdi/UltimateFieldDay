import AppFrame from "../components/AppFrame";

export default function AboutPage() {
    return (
        <AppFrame>
            <div className="flex flex-col">
                <div className="px-6 py-24 text-white sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            About
                        </h2>
                        <p className="mt-6 px-4 text-left text-lg leading-8">
                            Ultimate Field Day is a web application designed to
                            alleviate the stress of organizing field day events
                            and to introduce new, unique, and engaging games.
                        </p>
                    </div>
                </div>
            </div>
        </AppFrame>
    );
}
