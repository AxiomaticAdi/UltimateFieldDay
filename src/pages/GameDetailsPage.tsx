import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GamesService } from "../services/GamesService";
import { Game } from "../types/GameTypes";
import AppFrame from "../components/AppFrame";
import GameInfoSection from "../components/GameInfoSection";

export default function GameDetailsPage() {
    const { gameId } = useParams();
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        const fetchGame = async () => {
            const gamesList = await GamesService.fetchGamesAsync();
            if (gameId !== undefined && gamesList) {
                const selectedGame = gamesList.find((g) => g.gameId === gameId);
                setGame(selectedGame || null);
            }
        };

        fetchGame();
    }, [gameId]);

    if (!game) {
        return (
            <AppFrame>
                <div className="flex flex-col">
                    <div className="px-6 py-24 text-white sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                Loading...
                            </h2>
                        </div>
                    </div>
                </div>
            </AppFrame>
        );
    }

    return (
        <AppFrame>
            <div className="flex flex-col">
                <div className="px-6 py-24 text-white sm:py-32 lg:px-8">
                    <div className="mx-auto flex max-w-lg flex-col gap-12 text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            {game.name}
                        </h2>
                        {game.setup && (
                            <GameInfoSection
                                infoLabel="Setup"
                                infoSection={game.setup}
                            />
                        )}
                        {game.rules && (
                            <GameInfoSection
                                infoLabel="Rules"
                                infoSection={game.rules}
                            />
                        )}
                    </div>
                </div>
            </div>
        </AppFrame>
    );
}
