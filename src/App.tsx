import React, {useEffect} from 'react';
import './App.sass';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import User from "./store/user";

function App() {

    useEffect(() => {
        User.setIsAuth(localStorage.getItem('auth') === 'true');
        User.setUserId(Number(localStorage.getItem('userId')));
    }, [])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
