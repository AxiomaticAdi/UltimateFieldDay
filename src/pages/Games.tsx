import { GamesService } from "../services/GamesService";
import { useState } from "react";
import { Game } from "../types/Game";
import AppFrame from "../components/AppFrame";
import GameCard from "../components/GameCard";

export default function Games() {
    const [gamesList, setGameList] = useState<Game[] | undefined>();

    if (gamesList === undefined) {
        GamesService.fetchGamesAsync().then((res) => {
            setGameList(res);
        });
    }

    // if there are no games hydrated yet, render nothing
    if (gamesList === undefined) {
        return null;
    }

    return (
        <AppFrame>
            <div className="flex flex-row flex-wrap justify-center self-center">
                {gamesList.map((value) => {
                    return <GameCard key={value.id} game={value} />;
                })}
            </div>
        </AppFrame>
    );
}
