import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center text-white">
            <img src={"/ErrorPage.png"} width={"300px"} />
            <h1>Oops!</h1>
            <div>Sorry, an unexpected error has occurred.</div>
            <div>
                <i>{error.statusText || error.message}</i>
            </div>
        </div>
    );
}
