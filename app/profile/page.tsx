'use client';

import {Button} from "@/components/ui/button";
import React from "react";

export default function Page() {
    const [sayHello, setSayHello] = React.useState(false);

    function handleSayHello() {
        setSayHello(!sayHello);
    }

    return (
        <div className="max-w-screen-md mx-auto space-y-6 p-6">
            <h1 className={"font-bold text-2xl"}>Profile</h1>
            <h2>My name is <u><a href={"https://github.com/sogeking7"}>sogeking7</a></u></h2>
            <Button onClick={handleSayHello}>Say Hello 👋🏻</Button>
            {sayHello && <p className={"text-amber-500 text-3xl font-bold text-center"}>
                Hello 🙋🏿‍♂️!
            </p>}
        </div>
    )
}