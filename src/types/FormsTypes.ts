export type SubmitGameFormPayload = {
    gameTitle: string;
    gameSetup: string;
    gameRules: string;
    gameEquipment: string | null;
    gameMinPlayers: number | null;
    gameMaxPlayers: number | null;
    gameSetting: string;
    gameActivityLevel: string;
    userEmail: string | null;
};
