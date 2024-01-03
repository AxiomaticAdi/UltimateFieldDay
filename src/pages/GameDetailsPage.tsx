import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GamesService } from "../services/GamesService";
import { Game } from "../types/GameTypes";
import GameInfoSection from "../components/GameInfoSection";
import BasicPageFrame from "../components/BasicPageFrame";
import YouTubeEmbed from "../components/YouTubeEmbed";
import GameStatsCard from "../components/GameStatsCard";
import {
    equipmentListToString,
    fieldExists,
    gameToSlug,
    slugToGameId,
} from "../logic/modifyingFields";
import LoadingSpinner from "../components/LoadingSpinner";
import CustomLink from "../components/CustomLink";

export default function GameDetailsPage() {
    const { gameSlug } = useParams();
    const [game, setGame] = useState<Game | null | undefined>(undefined);

    useEffect(() => {
        const fetchGame = async () => {
            const gamesList = await GamesService.fetchGamesAsync();
            if (gameSlug !== undefined && gamesList) {
                const gameId = slugToGameId(gameSlug);
                const selectedGame = gamesList.find((g) => g.gameId === gameId);
                setGame(selectedGame || null);
            }
        };
        fetchGame();
    }, [gameSlug]);

    // To show while game is loading
    if (game === undefined) {
        return (
            <BasicPageFrame>
                <LoadingSpinner />
            </BasicPageFrame>
        );
    }

    // To show if game does not exist
    if (game === null) {
        return (
            <BasicPageFrame>
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Game not found!
                </h2>
            </BasicPageFrame>
        );
    }

    // To show if gameSlug is improperly modified
    if (gameToSlug(game) !== gameSlug) {
        return (
            <BasicPageFrame>
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Oops!
                </h2>
                <div className="mt-6 text-lg">
                    Did you mean to go to{" "}
                    <CustomLink linkTo={"/games/" + gameToSlug(game)}>
                        {game.name}
                    </CustomLink>
                    ?
                </div>
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

                {fieldExists(game.equipment[0]) && game.equipment && (
                    <GameInfoSection
                        infoLabel="Equipment"
                        infoSection={equipmentListToString(game.equipment)}
                    />
                )}
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

                <div>
                    <Link
                        to="/games"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        <span aria-hidden="true">&larr;</span> Back to games
                    </Link>
                </div>
            </div>
        </BasicPageFrame>
    );
}
