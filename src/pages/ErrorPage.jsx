import {useRouteError} from "react-router-dom";

import style from "./ErrorPage.module.css"

function ErrorPage() {

    const error = useRouteError()

    console.error(error)

    return (
        <div className={style.error}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;