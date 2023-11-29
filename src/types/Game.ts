import { Setting } from "./Setting";

export type Game = {
    rowId: string;
    gameId: string;
    name: string;
    setting: Setting;
    equipment: string[];
    minPlayerCount: number;
    maxPlayerCount?: number;
    setup?: string;
    rules?: string;
};
