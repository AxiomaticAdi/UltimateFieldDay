import axios from "axios";
import { Game, GameActivityLevel, GameSetting } from "../types/GameTypes";

const dataEndpoint =
    "https://docs.google.com/spreadsheets/d/1puezgtVv4978tGpoEjxrW-GALXBaUSx6_SBmFZRABlw/gviz/tq?";

let games: Game[] | undefined;

type SheetCell = {
    v: string | number;
    f: string | undefined;
};

type SheetRow = {
    c: (SheetCell | null)[];
};

export function sheetRowToMatch(cell: SheetRow, id: string): Game {
    let column = -1;
    const rowId = id;

    const gameId = String(cell.c[++column]?.v) ?? "";
    const name = String(cell.c[++column]?.v) ?? "";
    const settingRaw = String(cell.c[++column]?.v).toLowerCase() ?? "";
    const setting: GameSetting =
        settingRaw === "outdoor"
            ? GameSetting.Outdoor
            : settingRaw === "indoor"
              ? GameSetting.Indoor
              : GameSetting.Any;

    const activityLevelRaw = String(cell.c[++column]?.v).toLowerCase() ?? "";
    const activityLevel: GameActivityLevel =
        activityLevelRaw === "low"
            ? GameActivityLevel.Low
            : activityLevelRaw === "medium"
              ? GameActivityLevel.Medium
              : GameActivityLevel.High;

    const rawEquipment = String(cell.c[++column]?.v).split(",") ?? "";
    const equipment: string[] = rawEquipment.map((item) =>
        item.trim().toLowerCase(),
    );

    const minCount = Number(cell.c[++column]?.v) ?? 0;
    const maxCount = Number(cell.c[++column]?.v) ?? 0;

    const setup = String(cell.c[++column]?.v) ?? "";
    const rules = String(cell.c[++column]?.v) ?? "";

    const yt = String(cell.c[++column]?.v) ?? "";

    return {
        rowId: rowId,
        gameId: gameId,
        equipment: equipment,
        minPlayerCount: minCount,
        name: name,
        setting: setting,
        activityLevel: activityLevel,
        maxPlayerCount: maxCount,
        setup: setup,
        rules: rules,
        yt: yt,
    };
}

function mapObjectToGames(resultObj: any): Game[] | undefined {
    const games: Game[] = [];

    if (resultObj.table === undefined || resultObj.table.rows === undefined) {
        console.log(
            "Error parsing JSON object from data: resultObj.table or resultObj.table.rows is undefined.",
        );
        return undefined;
    }

    for (let i = 0; i < resultObj.table.rows.length; i++) {
        const cell = resultObj.table.rows[i];
        const game = sheetRowToMatch(cell, i.toString());
        games.push(game);
    }

    return games;
}

async function fetchGamesAsync(): Promise<Game[]> {
    if (games !== undefined) {
        return games;
    } else {
        console.log("Fetching games...");
        const result = await axios.get<string>(dataEndpoint, {}).then((res) => {
            // strip out the setResponse text from the data
            let raw: string = res.data;
            const startText = ".setResponse(";
            raw = raw.substring(raw.indexOf(startText) + startText.length);
            raw = raw.substring(0, raw.length - 2);
            const resultObj = JSON.parse(raw);
            const matches = mapObjectToGames(resultObj);

            if (matches !== undefined) {
                games = matches;
                return matches;
            } else {
                console.log("mapping resultObj to matches failed.");
            }
        });
        return result ?? [];
    }
}

export const GamesService = {
    fetchGamesAsync,
};
