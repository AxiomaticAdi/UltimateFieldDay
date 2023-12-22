import { Game } from "../types/GameTypes";

export const alphabeticalSort = (a: Game, b: Game) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
};
