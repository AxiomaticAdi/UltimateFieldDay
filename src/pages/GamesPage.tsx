import { GamesService } from "../services/GamesService";
import { useCallback, useEffect, useState } from "react";

import { Game } from "../types/GameTypes";
import { FilterStates } from "../types/FilterTypes";
import { alphabeticalSort } from "../logic/sorting";

import AppFrame from "../components/AppFrame";
import BasicPageFrame from "../components/BasicPageFrame";
import LoadingSpinner from "../components/LoadingSpinner";
import GameCard from "../components/GameCard";
import FilterSection from "../components/FilterSection";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { applyFilters } from "../logic/filtering";

export default function GamesPage() {
    const [gamesList, setGameList] = useState<Game[] | undefined>();
    const [filteredGamesList, setFilteredGamesList] = useState<
        Game[] | undefined
    >();

    // Filters
    const [indoorFilter, setIndoorFilter] = useState<boolean>(true);
    const [outdoorFilter, setOutdoorFilter] = useState<boolean>(true);
    const [lowActivityFilter, setLowActivityFilter] = useState<boolean>(true);
    const [mediumActivityFilter, setMediumActivityFilter] =
        useState<boolean>(true);
    const [highActivityFilter, setHighActivityFilter] = useState<boolean>(true);

    const [includedEquipmentFilter, setIncludedEquipmentFilter] = useState<
        string[]
    >([]);
    const [excludedEquipmentFilter, setExcludedEquipmentFilter] = useState<
        string[]
    >([]);

    const [playerCountFilter, setPlayerCountFilter] = useState<
        number | undefined
    >(undefined);

    const resetFilters = useCallback(() => {
        setIndoorFilter(true);
        setOutdoorFilter(true);
        setLowActivityFilter(true);
        setMediumActivityFilter(true);
        setHighActivityFilter(true);
        setIncludedEquipmentFilter([]);
        setExcludedEquipmentFilter([]);
        setPlayerCountFilter(undefined);
        setSearchQuery("");
    }, []);

    // Search
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Animation
    const [parentGameCards] = useAutoAnimate();

    // On first load
    useEffect(() => {
        // Fetch Games
        if (gamesList === undefined) {
            GamesService.fetchGamesAsync().then((res) => {
                setGameList(res);
            });
        }
    });

    useEffect(() => {
        if (gamesList) {
            // Filter games
            const filters: FilterStates = {
                indoor: indoorFilter,
                outdoor: outdoorFilter,
                lowActivity: lowActivityFilter,
                mediumActivity: mediumActivityFilter,
                highActivity: highActivityFilter,
                includedEquipment: includedEquipmentFilter,
                excludedEquipment: excludedEquipmentFilter,
                playerCount: playerCountFilter,
                searchQuery: searchQuery,
            };
            const filteredGames = applyFilters(gamesList, filters);

            // Sort games
            filteredGames.sort(alphabeticalSort);

            // Update filtered games
            setFilteredGamesList(filteredGames);
        }
    }, [
        excludedEquipmentFilter,
        gamesList,
        highActivityFilter,
        includedEquipmentFilter,
        indoorFilter,
        lowActivityFilter,
        mediumActivityFilter,
        outdoorFilter,
        playerCountFilter,
        searchQuery,
    ]);

    // if there are no games hydrated yet, show loading spinner
    if (filteredGamesList === undefined) {
        return (
            <BasicPageFrame>
                <LoadingSpinner />
            </BasicPageFrame>
        );
    }

    // Calculate all equipment values
    const getAllEquipment = (games: Game[] | undefined): Set<string> => {
        const tempEquipmentSet = new Set<string>();
        if (games) {
            games.forEach((game) => {
                game.equipment.forEach((item) => tempEquipmentSet.add(item));
            });
        }
        return tempEquipmentSet;
    };
    const equipmentSet: Set<string> = getAllEquipment(gamesList);

    return (
        <AppFrame>
            <div className="flex w-full flex-col">
                <FilterSection
                    indoorFilter={indoorFilter}
                    setIndoorFilter={setIndoorFilter}
                    outdoorFilter={outdoorFilter}
                    setOutdoorFilter={setOutdoorFilter}
                    lowActivityFilter={lowActivityFilter}
                    setLowActivityFilter={setLowActivityFilter}
                    mediumActivityFilter={mediumActivityFilter}
                    setMediumActivityFilter={setMediumActivityFilter}
                    highActivityFilter={highActivityFilter}
                    setHighActivityFilter={setHighActivityFilter}
                    resetFilters={resetFilters}
                    equipmentSet={equipmentSet}
                    includedEquipmentFilter={includedEquipmentFilter}
                    setIncludedEquipmentFilter={setIncludedEquipmentFilter}
                    excludedEquipmentFilter={excludedEquipmentFilter}
                    setExcludedEquipmentFilter={setExcludedEquipmentFilter}
                    playerCountFilter={playerCountFilter}
                    setPlayerCountFilter={setPlayerCountFilter}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
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
