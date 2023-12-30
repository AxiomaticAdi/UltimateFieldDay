import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GamesService } from "../services/GamesService";
import { Game } from "../types/GameTypes";
import GameInfoSection from "../components/GameInfoSection";
import BasicPageFrame from "../components/BasicPageFrame";
import YouTubeEmbed from "../components/YouTubeEmbed";
import GameStatsCard from "../components/GameStatsCard";
import { fieldExists } from "../logic/existing";
import LoadingSpinner from "../components/LoadingSpinner";

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

    // To show while game is loading
    if (game === undefined) {
        return (
            <BasicPageFrame>
                <LoadingSpinner />
            </BasicPageFrame>
        );
    }

    // To show if gameId does not exist
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
                <div>
                    <GameStatsCard game={game} />
                </div>

                {fieldExists(game.setup) && game.setup && (
                    <GameInfoSection
                        infoLabel="Setup"
                        infoSection={game.setup}
                    />
                )}
                {fieldExists(game.rules) && game.rules && (
                    <GameInfoSection
                        infoLabel="Rules"
                        infoSection={game.rules}
                    />
                )}
                {fieldExists(game.yt) && game.yt && (
                    <YouTubeEmbed ytLink={game.yt} />
                )}
            </div>
        </BasicPageFrame>
    );
}
