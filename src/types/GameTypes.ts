export type Game = {
    rowId: string;
    gameId: string;
    name: string;
    setting: GameSetting;
    activityLevel: GameActivityLevel;
    equipment: string[];
    minPlayerCount: number;
    maxPlayerCount?: number;
    setup?: string;
    rules?: string;
    yt?: string;
};

export enum GameSetting {
    Indoor = "Indoor",
    Outdoor = "Outdoor",
    Any = "Any",
}

export enum GameActivityLevel {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}
