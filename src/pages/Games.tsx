import { GamesService } from "../services/GamesService";
import { useCallback, useEffect, useState } from "react";
import { Game } from "../types/Game";
import AppFrame from "../components/AppFrame";
import GameCard from "../components/GameCard";
import FilterSection from "../components/FilterSection";

import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Games() {
    const [gamesList, setGameList] = useState<Game[] | undefined>();
    const [filteredGamesList, setFilteredGamesList] = useState<
        Game[] | undefined
    >();

    // Filters
    const [indoorFilter, setIndoorFilter] = useState<boolean>(true);
    const [outdoorFilter, setOutdoorFilter] = useState<boolean>(true);
    const resetFilters = useCallback(() => {
        setIndoorFilter(true);
        setOutdoorFilter(true);
    }, [setIndoorFilter, setOutdoorFilter]);

    // Animation
    const [parentGameCards] = useAutoAnimate();

    // Fetch games on first load
    useEffect(() => {
        if (gamesList === undefined) {
            GamesService.fetchGamesAsync().then((res) => {
                setGameList(res);
            });
        }
    });

    useEffect(() => {
        // Filter logic
        if (gamesList) {
            const filteredGames = gamesList.filter((game) => {
                return (
                    (indoorFilter && game.setting === "Indoor") ||
                    (outdoorFilter && game.setting === "Outdoor") ||
                    ((indoorFilter || outdoorFilter) && game.setting === "Any")
                );
            });

            setFilteredGamesList(filteredGames);
        }
    }, [gamesList, indoorFilter, outdoorFilter]);

    // if there are no games hydrated yet, render blank page
    if (filteredGamesList === undefined) {
        return (
            <AppFrame>
                <div></div>
            </AppFrame>
        );
    }

    return (
        <AppFrame>
            <div className="w-full">
                <FilterSection
                    indoorFilter={indoorFilter}
                    setIndoorFilter={setIndoorFilter}
                    outdoorFilter={outdoorFilter}
                    setOutdoorFilter={setOutdoorFilter}
                    resetFilters={resetFilters}
                />

                <div
                    ref={parentGameCards}
                    className="flex flex-wrap items-center justify-center"
                >
                    {filteredGamesList.map((value) => {
                        return <GameCard key={value.gameId} game={value} />;
                    })}
                </div>
            </div>
        </AppFrame>
    );
}
