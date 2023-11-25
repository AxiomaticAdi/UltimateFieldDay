import { Game } from "../types/Game";

export default function GameCardModal({ game }: { game: Game }) {
    return (
        <div className="p-5">
            <div className="w-48 rounded-xl bg-indigo-500 text-center text-white hover:cursor-pointer hover:bg-indigo-400">
                <strong>{game.name}</strong>
            </div>
        </div>
    );
}
