import { useRouteError } from "react-router-dom";
import BasicPageFrame from "../components/BasicPageFrame";

function isErrorWithMessageAndStatusText(
    error: unknown,
): error is { message: string; statusText: string } {
    return (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        "statusText" in error
    );
}

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <BasicPageFrame>
            <img
                className="rounded-full pt-16"
                src={"/ErrorPage.png"}
                width={"300px"}
            />
            <h1 className="text-4xl font-bold">Oops!</h1>
            <div>Sorry, an unexpected error has occurred.</div>
            <div>
                {isErrorWithMessageAndStatusText(error) ? (
                    <i>{error.statusText || error.message}</i>
                ) : null}
            </div>
        </BasicPageFrame>
    );
}
