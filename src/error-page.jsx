import { useRouteError} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="nugget">
            <h1>Oops!</h1>
            <p>There's nothing here! I guess your presents are hidden elsewhere.</p>
        </div>
    );
}