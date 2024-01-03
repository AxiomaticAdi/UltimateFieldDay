import BasicPageFrame from "../components/BasicPageFrame";
import CustomLink from "../components/CustomLink";

export default function AboutPage() {
    return (
        <BasicPageFrame>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                About
            </h2>
            <div className="mt-6 flex flex-col gap-8 px-4 text-left text-lg leading-8">
                <p>
                    Born from the nostalgia of my college days where my friends
                    and I would compete to see who can stuff the most{" "}
                    <CustomLink linkTo={"/games/chubby-bunny-30"}>
                        marshmallows in their mouth
                    </CustomLink>{" "}
                    at once or{" "}
                    <CustomLink linkTo={"/games/scream-run-31"}>
                        scream-run
                    </CustomLink>{" "}
                    the furthest.
                </p>
                <p>
                    Inspired by the joy of a{" "}
                    <CustomLink linkTo={"/games/ping-pong-booty-shake-23"}>
                        booty-shaking challenge
                    </CustomLink>{" "}
                    that brought out the deepest belly laughs from an otherwise
                    reserved uncle at our annual Family Olympics.
                </p>
                <p>
                    Molded by the frustration of sorting through the thousands
                    of game ideas scattered online and discarding most of what I
                    found due to mismatch of group size, lack of equipment, or
                    many other factors.
                </p>
                <p>
                    That's why I created this site - a free, fully searchable
                    repository of field day games that caters to all settings,
                    group sizes, and levels of physical ability. So, dive in,
                    pick the perfect game, and don't forget to{" "}
                    <CustomLink linkTo={"/submit"}>
                        add your own favorite games
                    </CustomLink>{" "}
                    to our ever-expanding catalog.
                </p>
            </div>
            <CustomLink linkTo={"/games/egg-spoon-relay-6"}>
                <img
                    src="/FieldDayFanPic.webp"
                    className="mx-auto mt-12 h-48 rounded-full"
                    alt="player playing a game of egg spoon relay"
                />
            </CustomLink>
        </BasicPageFrame>
    );
}
