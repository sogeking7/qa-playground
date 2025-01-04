'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ActionClassTest() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="space-y-4">
            <div
                id="hover-element"
                className="w-40 h-40 bg-gray-300 flex items-center justify-center cursor-pointer"
                onMouseOver={() => setClicked(true)} // Change state on hover
            >
                {clicked ? "Click Me!" : "Hover to Enable"}
            </div>
            {clicked && (
                <Button id="clickable-button" onClick={() => alert("Button Clicked!")}>
                    Perform Action
                </Button>
            )}
        </div>
    );
}
