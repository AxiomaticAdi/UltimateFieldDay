import { Game } from "../types/GameTypes";

export function fieldExists(field: string | undefined | null): boolean {
    if (
        field === undefined ||
        field === null ||
        field === "undefined" ||
        field === "null"
    ) {
        return false;
    }
    return true;
}

export function equipmentListToString(equipmentList: string[]): string {
    if (equipmentList.length === 0) {
        return "";
    }
    const firstItem =
        equipmentList[0].charAt(0).toUpperCase() +
        equipmentList[0].slice(1).toLowerCase();
    const remainingItems = equipmentList
        .slice(1)
        .map((item) => item.toLowerCase());

    return [firstItem, ...remainingItems].join(", ");
}

export function gameToSlug(game: Game): string {
    return (
        game.name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-") // Replace spaces with hyphen
            .replace(/&/g, "and") // Replace & with 'and'
            .replace(/[^\w-]+/g, "") // Remove remaining non-word characters
            .replace(/--+/g, "-") + // Replace multiple hyphens with single hyphen
        "-" +
        game.gameId
    );
}

export function slugToGameId(urlSlug: string): string {
    const gameId = urlSlug.split("-").pop();
    if (gameId === undefined) {
        throw new Error("Invalid slug: gameId not found");
    }
    return gameId;
}
