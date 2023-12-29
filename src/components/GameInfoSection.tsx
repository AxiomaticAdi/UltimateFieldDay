interface GameInfoSectionProps {
    infoLabel: string;
    infoSection: string;
}

export default function GameInfoSection({
    infoLabel,
    infoSection,
}: GameInfoSectionProps) {
    return (
        <div className="flex flex-col justify-center text-left">
            <h2 className="text-center text-base font-semibold leading-7">
                {infoLabel}
            </h2>
            <p className="mt-1 text-base leading-6 text-gray-200">
                {infoSection}
            </p>
        </div>
    );
}
