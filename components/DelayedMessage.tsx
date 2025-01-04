'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function DelayedMessage() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    function showMessageWithDelay() {
        setLoading(true); // Set loading to true
        setMessage(""); // Clear any previous message
        setTimeout(() => {
            setMessage("Secret message...!");
            setLoading(false); // Set loading to false after delay
        }, 3000); // 3-second delay
    }

    return (
        <div className="space-y-4">
            <Button
                id="delayed-message-button"
                onClick={showMessageWithDelay}
                variant="outline"
                disabled={loading} // Disable the button while loading
            >
                {loading ? "Loading..." : "Show Message"}
            </Button>
            {message && <p id="delayed-message" className="text-green-500">{message}</p>}
        </div>
    );
}
