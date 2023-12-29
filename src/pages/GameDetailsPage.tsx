import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GamesService } from "../services/GamesService";
import { Game } from "../types/GameTypes";
import GameInfoSection from "../components/GameInfoSection";
import BasicPageFrame from "../components/BasicPageFrame";
import GameCategoryInfoSummary from "../components/GameInfoSummary";

export default function GameDetailsPage() {
    const { gameId } = useParams();
    const [game, setGame] = useState<Game | null | undefined>(undefined);

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

    if (game === undefined) {
        return (
            <BasicPageFrame>
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Game not found!
                </h2>
            </BasicPageFrame>
        );
    }

    if (game === null) {
        return (
            <BasicPageFrame>
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Game not found!
                </h2>
            </BasicPageFrame>
        );
    }

    return (
        <BasicPageFrame>
            <div className="flex flex-col gap-12">
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
            <div>
                <GameCategoryInfoSummary game={game} />
            </div>
        </BasicPageFrame>
    );
}
