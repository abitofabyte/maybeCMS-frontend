import {createContext, useContext, useEffect, useState} from "react";
import PropTypes, {func} from "prop-types";
import config from "../Config.js";
import {Buffer} from "buffer";


const StoreContext = createContext(null)

function StoreContextProvider({children}) {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        console.log(email, password)
        const auth = Buffer.from(email + ":" + password).toString("base64");
        const headers = {
            Authorization: "Basic " + auth,
            "Content-Type": "application/json"
        }
        const data = await fetch(config.routing.backend.login, { headers }).then(res => res.json())
        console.log(data)
        if(data.error) {
            return false
        }
        localStorage.setItem("data", JSON.stringify(data))
        setUser(data)
        return true
    }

    function logout() {
        localStorage.removeItem("data")
        setUser(null)
    }

    async function rememberMe(user) {
        console.log(user)
        const headers = {
            Authorization: "Bearer " + user.token
        }
        const data = await fetch(config.routing.backend.login, {headers}).then(res => res.json())
        console.log(data)
        if(data.error) {
            //todo: fix
            console.log(data)
            return
        }
        localStorage.setItem("data", JSON.stringify(data))
        setUser(data)
        console.log("?")
    }

    useEffect(() => {
        const data = localStorage.getItem("data")
        if (data) {
            rememberMe(JSON.parse(data))
        }
    }, [])

    return (
        <StoreContext.Provider value={{user, login, logout}}>
            {children}
        </StoreContext.Provider>
    )
}

StoreContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default StoreContextProvider

export function useStoreContext() {
    const context = useContext(StoreContext)
    if (!context) {
        throw new Error("useStoreContext must be used within a UserContextProvider");
    }
    return context;
}
