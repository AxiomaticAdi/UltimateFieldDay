import { GamesService } from "./services/GamesService";
import { useState } from "react";
import { Game } from "./types/Game";

export default function Games() {
	const [gamesList, setGameList] = useState<Game[] | undefined>();

	if (gamesList === undefined) {
		GamesService.fetchGamesAsync().then((res) => {
			setGameList(res);
		});
	}

	// if there are no games hydrated yet, render nothing
	if (gamesList === undefined) {
		return null;
	}

	return (
		<div>
			<div></div>
		</div>
	);
}
