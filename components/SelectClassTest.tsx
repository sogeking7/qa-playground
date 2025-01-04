'use client';

import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SelectClassTest() {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div className="space-y-4">
            <Select onValueChange={setSelectedOption}>
                <SelectTrigger id="dropdown" className="w-[200px]">
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
            </Select>

            {selectedOption && (
                <p id="selected-option" className="text-blue-500">
                    Selected: {selectedOption}
                </p>
            )}
        </div>
    );
}
