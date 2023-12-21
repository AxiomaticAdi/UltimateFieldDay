import { useState } from "react";
import AppFrame from "../components/AppFrame";
import TextBoxInput from "../components/form/TextBoxInput";
import RadioOptions from "../components/form/RadioOptions";
import NumberInput from "../components/form/NumberInput";

export default function SubmitGamePage() {
    const [gameTitle, setGameTitle] = useState<string>("");
    const [gameSetup, setGameSetup] = useState<string>("");
    const [gameRules, setGameRules] = useState<string>("");
    const [gameEquipment, setGameEquipment] = useState<string>("");
    const [gameMinPlayers, setGameMinPlayers] = useState<number>();
    const [gameMaxPlayers, setGameMaxPlayers] = useState<number>();
    const [gameSetting, setGameSetting] = useState("");
    const [gameActivityLevel, setGameActivityLevel] = useState<string>("");
    const [userEmail, setUserEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log();
    };

    return (
        <AppFrame>
            <form className="px-4">
                <div className="space-y-12 text-white">
                    <div className="px-6 py-24 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                                Submit a game!
                            </h2>
                            <p className="mt-6 text-lg leading-8">
                                Share your favorite field day games with our
                                community! Submit your game ideas and spread the
                                joy of fun and competitive play for everyone to
                                enjoy.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 className="text-base font-semibold leading-7">
                                Game Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-400">
                                Your submission will be reviewed by a moderator.
                                If approved, it will be shared publicly on the
                                site.
                            </p>
                        </div>

                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="inputGameTitle"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Title
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="gameTitle"
                                            id="gameTitle"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Best Game Ever"
                                            value={gameTitle}
                                            onChange={(e) =>
                                                setGameTitle(e.target.value)
                                            }
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            <TextBoxInput
                                title={"Setup"}
                                placeholder={
                                    "Describe play area setup and any suggested equipment"
                                }
                                value={gameSetup}
                                onChange={setGameSetup}
                                isRequired={true}
                            />

                            <TextBoxInput
                                title={"Rules"}
                                placeholder={"Outline the rules of the game"}
                                value={gameRules}
                                onChange={setGameRules}
                                isRequired={true}
                            />

                            <TextBoxInput
                                title={"Equipment"}
                                placeholder={
                                    "List out any required equipment, separated by commas\ne.g. hula hoop, basketball, spoon"
                                }
                                value={gameEquipment}
                                onChange={setGameEquipment}
                                isRequired={false}
                            />

                            <NumberInput
                                label={"Minimum Player Count"}
                                name={"gameMinPlayers"}
                                placeholder={"2"}
                                min={0}
                                max={50}
                                value={gameMinPlayers}
                                onChange={setGameMinPlayers}
                            />

                            <NumberInput
                                label={"Maximum Player Count"}
                                name={"gameMaxPlayers"}
                                placeholder={"100"}
                                min={0}
                                max={100}
                                value={gameMaxPlayers}
                                onChange={setGameMaxPlayers}
                            />

                            <RadioOptions
                                name="setting"
                                title="Setting"
                                description="Where should this game be played?"
                                options={[
                                    { label: "Indoor", value: "indoor" },
                                    { label: "Outdoor", value: "outdoor" },
                                    { label: "Any", value: "any" },
                                ]}
                            />

                            <RadioOptions
                                name="gameActivityLevel"
                                title="Activity Level"
                                description="Where level of exertion is required?"
                                options={[
                                    { label: "Low", value: "Low" },
                                    { label: "Medium", value: "Medium" },
                                    { label: "High", value: "High" },
                                ]}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 className="text-base font-semibold leading-7 ">
                                Contact Information
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-400">
                                If you'd like to receive an email if your game
                                is added to our site, include your contact
                                information here
                            </p>
                        </div>

                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 "
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 bg-transparent py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-white "
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </AppFrame>
    );
}
