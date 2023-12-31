export type FilterStates = {
    indoor: boolean;
    outdoor: boolean;
    lowActivity: boolean;
    mediumActivity: boolean;
    highActivity: boolean;
    includedEquipment: string[];
    excludedEquipment: string[];
    playerCount: number | undefined;
    searchQuery: string;
};
