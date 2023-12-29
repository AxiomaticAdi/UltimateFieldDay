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
                        <div className="mt-6 flex flex-col gap-4 px-4 text-left text-lg leading-8">
                            <p>
                                Born from the nostalgia of college days where my
                                friends and I would compete to see who can{" "}
                                <CustomLink linkTo={"/games/30"}>
                                    stuff the most marshmallows in their mouth
                                </CustomLink>{" "}
                                at once, or who could scream-run the longest
                                without ever dropping in volume.
                            </p>
                            <p>
                                Inspired by the joy of finding a silly
                                booty-shaking challenge that would bring out the
                                deepest belly laughs from an otherwise reserved
                                uncle at our annual Family Olympics.
                            </p>
                            <p>
                                Molded by the frustration of sorting through the
                                thousands of game ideas scattered online and
                                discarding most of what I found due to mismatch
                                of group sizes, lack of equipment, or just not
                                finding the “perfect game.”
                            </p>
                            <p>
                                That's why I created this treasure trove - a
                                free, fully searchable repository of field day
                                games that caters to settings, group sizes, and
                                levels of physical ability. So, dive in, pick
                                the perfect game, and don't forget to{" "}
                                <CustomLink linkTo={"/submit"}>
                                    add your own favorite games
                                </CustomLink>{" "}
                                to our ever-expanding catalog.
                            </p>
                        </div>
                        <img
                            src="/FieldDayFanPic.webp"
                            className="mx-auto mt-12 h-48 rounded-full"
                            alt="photo of a player playing a game of egg spoon relay"
                        />
                    </div>
                </div>
            </div>
        </AppFrame>
    );
}
