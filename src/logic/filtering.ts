import { FilterStates } from "../types/FilterTypes";
import { Game } from "../types/GameTypes";

export const applyFilters = (games: Game[], filters: FilterStates): Game[] => {
    return games.filter((game) => {
        const settingFilter =
            (filters.indoor && game.setting === "Indoor") ||
            (filters.outdoor && game.setting === "Outdoor") ||
            ((filters.indoor || filters.outdoor) && game.setting === "Any");

        const activityFilter =
            (filters.lowActivity && game.activityLevel === "Low") ||
            (filters.mediumActivity && game.activityLevel === "Medium") ||
            (filters.highActivity && game.activityLevel === "High");

        const equipmentFilter =
            includeEquipmentFilter(game, filters.includedEquipment) &&
            excludeEquipmentFilter(game, filters.excludedEquipment);

        const playerCountFilter = filters.playerCount
            ? game.minPlayerCount <= filters.playerCount &&
              game.maxPlayerCount >= filters.playerCount
            : true;

        const searchFilter = searchGameNameFilter(game, filters.searchQuery);

        return (
            settingFilter &&
            activityFilter &&
            equipmentFilter &&
            playerCountFilter &&
            searchFilter
        );
    });
};

const includeEquipmentFilter = (game: Game, includedEquipment: string[]) => {
    if (includedEquipment.length === 0) {
        return true;
    }

    const equipmentSet = new Set(game.equipment);
    for (const item of includedEquipment) {
        if (!equipmentSet.has(item)) {
            return false;
        }
    }

    return true;
};

const excludeEquipmentFilter = (game: Game, excludedEquipment: string[]) => {
    if (excludedEquipment.length === 0) {
        return true;
    }

    const equipmentSet = new Set(game.equipment);
    for (const item of excludedEquipment) {
        if (equipmentSet.has(item)) {
            return false;
        }
    }

    return true;
};

const searchGameNameFilter = (game: Game, searchQuery: string): boolean => {
    if (!searchQuery) {
        return true;
    }
    return game.name.toLowerCase().includes(searchQuery.toLowerCase());
};
