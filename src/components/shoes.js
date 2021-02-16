import React from "react";
import { useEffect, useState } from "react";

export const Shoes = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch("/api/")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })

            .then((jsonResponse) => setInitialState(jsonResponse.shoes));
    }, []);
    console.log(initialState);
    return (
        <div>
            {/* <div>{initialState}</div> */}
            <div>
                {" "}
                {initialState.length > 0 &&
                    initialState.map((e) => <li>{e}</li>)}
            </div>
        </div>
    );
};
