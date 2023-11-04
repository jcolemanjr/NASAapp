import React,{useState, useEffect} from "react";

function Home(){

    const [user,setUser]=('')

    useEffect(() => {
        // auto-login
        fetch("/check_session").then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
        });
    }, [])

    return (
        <div>

        </div>
    )
}

export default Home