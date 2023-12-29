import AppFrame from "../components/AppFrame";
import CustomLink from "../components/CustomLink";

export default function AboutPage() {
    return (
        <AppFrame>
            <div className="flex flex-col">
                <div className="px-6 py-24 text-white sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                            About
                        </h2>
                        <div className="mt-6 flex flex-col gap-8 px-4 text-left text-lg leading-8">
                            <p>
                                Born from the nostalgia of my college days where
                                my friends and I would compete to see who can
                                stuff the most{" "}
                                <CustomLink linkTo={"/games/30"}>
                                    marshmallows in their mouth
                                </CustomLink>{" "}
                                at once or{" "}
                                <CustomLink linkTo={"/games/30"}>
                                    scream-run
                                </CustomLink>{" "}
                                the furthest.
                            </p>
                            <p>
                                Inspired by the joy of a{" "}
                                <CustomLink linkTo={"/games/23"}>
                                    booty-shaking challenge
                                </CustomLink>{" "}
                                that brought out the deepest belly laughs from
                                an otherwise reserved uncle at our annual Family
                                Olympics.
                            </p>
                            <p>
                                Molded by the frustration of sorting through the
                                thousands of game ideas scattered online and
                                discarding most of what I found due to mismatch
                                of group size, lack of equipment, or many other
                                factors.
                            </p>
                            <p>
                                That's why I created this treasure trove - a
                                free, fully searchable repository of field day
                                games that caters to all settings, group sizes,
                                and levels of physical ability. So, dive in,
                                pick the perfect game, and don't forget to{" "}
                                <CustomLink linkTo={"/submit"}>
                                    add your own favorite games
                                </CustomLink>{" "}
                                to our ever-expanding catalog.
                            </p>
                        </div>
                        <CustomLink linkTo={"/games/6"}>
                            <img
                                src="/FieldDayFanPic.webp"
                                className="mx-auto mt-12 h-48 rounded-full"
                                alt="photo of a player playing a game of egg spoon relay"
                            />
                        </CustomLink>
                    </div>
                </div>
            </div>
        </AppFrame>
    );
}
