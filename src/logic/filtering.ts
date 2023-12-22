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

        return settingFilter && activityFilter;
    });
};
