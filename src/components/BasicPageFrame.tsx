import AppFrame from "./AppFrame";

export default function BasicPageFrame({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AppFrame>
            <div className="w-full">
                <div className="px-6 py-24 text-white sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        {children}
                    </div>
                </div>
            </div>
        </AppFrame>
    );
}
