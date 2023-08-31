import { observer } from "mobx-react-lite";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { Context } from ".";
import { useContext, useEffect, useState } from "react";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!user.isAuth && !token){
            setLoading(false)
            return
        }
        check()
            .then((data) => {
                if (data) {
                    user.setIsAuth(true);
                } else {
                    user.setIsAuth(false);
                }
            })
            .finally(() => setLoading(false));
    }, [user]);
    if (loading) {
        return <Spinner animation="grow" />;
    }
    return (
        <div className="App">
            <NavBar />
            <AppRouter />
        </div>
    );
});

export default App;
