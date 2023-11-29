import { GamesService } from "../services/GamesService";
import { useEffect, useState } from "react";
import { Game } from "../types/Game";
import AppFrame from "../components/AppFrame";
import GameCard from "../components/GameCard";
import FilterSection from "../components/FilterSection";

export default function Games() {
    const [gamesList, setGameList] = useState<Game[] | undefined>();
    const [filteredGamesList, setFilteredGamesList] = useState<
        Game[] | undefined
    >();

    // Filters
    const [setting, setSetting] = useState({ Indoor: true, Outdoor: true });

    const handleSettingChange = (changedSetting: string) => {
        // Solve type errors - exit if not correct string
        if (changedSetting !== "Indoor" && changedSetting !== "Outdoor") {
            return;
        }

        setSetting((prevSetting) => {
            const newSetting = { ...prevSetting };

            // Toggle the current setting
            newSetting[changedSetting] = !prevSetting[changedSetting];

            // If neither are selected, set both to true
            if (!newSetting.Indoor && !newSetting.Outdoor) {
                newSetting.Indoor = newSetting.Outdoor = true;
            }

            console.log(
                "NewSetting is: " +
                    "Indoor: " +
                    newSetting.Indoor +
                    " Outdoor: " +
                    newSetting.Outdoor,
            );
            return newSetting;
        });

        console.log(
            "Setting is: " +
                "Indoor: " +
                setting.Indoor +
                " Outdoor: " +
                setting.Outdoor,
        );
    };

    if (gamesList === undefined) {
        GamesService.fetchGamesAsync().then((res) => {
            setGameList(res);
        });
    }

    useEffect(() => {
        // Filter logic
        if (gamesList) {
            const filteredGames = gamesList.filter((game) => {
                if (game.setting === "Any") return true;
                if (setting.Indoor && game.setting === "Indoor") return true;
                if (setting.Outdoor && game.setting === "Outdoor") return true;
                return false;
            });

            setFilteredGamesList(filteredGames);
        }
    }, [gamesList, setting]);

    // if there are no games hydrated yet, render blank page
    if (filteredGamesList === undefined) {
        return (
            <AppFrame>
                <div></div>
            </AppFrame>
        );
    }

    return (
        <AppFrame>
            <div className="w-full">
                <FilterSection />

                <div className="flex text-white">
                    <input
                        type="checkbox"
                        checked={setting.Indoor}
                        onChange={() => handleSettingChange("Indoor")}
                    />
                    <label>Indoor</label>

                    <input
                        type="checkbox"
                        checked={setting.Outdoor}
                        onChange={() => handleSettingChange("Outdoor")}
                    />
                    <label>Outdoor</label>
                </div>

                <div className="flex flex-wrap items-center justify-center">
                    {filteredGamesList.map((value) => {
                        return <GameCard key={value.gameId} game={value} />;
                    })}
                </div>
            </div>
        </AppFrame>
    );
}
