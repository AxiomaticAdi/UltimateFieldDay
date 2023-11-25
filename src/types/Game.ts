import { Setting } from "./Setting";

export type Game = {
    id: string;
    name: string;
    imgUri: string;
    setting: Setting;
    equipment: string[];
    minPlayerCount: number;
    maxPlayerCount?: number;
};
