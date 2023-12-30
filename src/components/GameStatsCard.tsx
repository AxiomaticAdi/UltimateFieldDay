import { Game } from "../types/GameTypes";

interface GameStatsCardProps {
    game: Game;
}

export default function GameStatsCard(game: GameStatsCardProps) {
    const maxPlayerCount = (count: number) => {
        if (count === 100) {
            return `${count}+`;
        } else {
            return count;
        }
    };

    const gameCategoryInfo = [
        { id: 1, name: "Setting", value: game.game.setting },
        { id: 2, name: "Activity level", value: game.game.activityLevel },
        { id: 3, name: "Min Players", value: game.game.minPlayerCount },
        {
            id: 4,
            name: "Max Players",
            value: maxPlayerCount(game.game.maxPlayerCount),
        },
    ];

    return (
        <dl className="mt-2 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {gameCategoryInfo.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-indigo-800 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-300">
                        {stat.name}
                    </dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                        {stat.value}
                    </dd>
                </div>
            ))}
        </dl>
    );
}
