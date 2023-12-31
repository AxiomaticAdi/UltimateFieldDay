import { Game } from "../types/GameTypes";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
    equipmentListToString,
    fieldExists,
    gameToSlug,
} from "../logic/modifyingFields";

export default function GameCardModal({ game }: { game: Game }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-5">
            <button
                onClick={() => setOpen(true)}
                className="h-16 w-48 rounded-xl bg-indigo-600 px-2 text-center text-white hover:cursor-pointer hover:bg-indigo-500"
            >
                <strong>{game.name}</strong>
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex items-center justify-center">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base font-bold leading-6 text-gray-900"
                                            >
                                                {game.name}
                                            </Dialog.Title>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <div className="flex flex-col gap-4 text-sm">
                                                {fieldExists(
                                                    game.equipment[0],
                                                ) && (
                                                    <div>
                                                        <strong>
                                                            Equipment:{" "}
                                                        </strong>
                                                        <div className="text-center">
                                                            {equipmentListToString(
                                                                game.equipment,
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {fieldExists(game.setup) && (
                                                    <div>
                                                        <strong>Setup: </strong>
                                                        <div className="text-left">
                                                            {game.setup}
                                                        </div>
                                                    </div>
                                                )}

                                                {fieldExists(game.rules) && (
                                                    <div>
                                                        <strong>Rules: </strong>
                                                        <div className="text-left">
                                                            {game.rules}
                                                        </div>
                                                    </div>
                                                )}

                                                {game.yt &&
                                                    fieldExists(game.yt) && (
                                                        <div className="flex flex-col items-center justify-center">
                                                            <strong>
                                                                Video
                                                                explainers:{" "}
                                                            </strong>
                                                            <Link to={game.yt}>
                                                                <img
                                                                    src="/yt.svg"
                                                                    className="mt-3 h-5 w-auto"
                                                                />
                                                            </Link>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex gap-4 sm:mt-6">
                                        <Link
                                            className="inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            to={gameToSlug(game)}
                                        >
                                            More info
                                        </Link>

                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={() => setOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}
