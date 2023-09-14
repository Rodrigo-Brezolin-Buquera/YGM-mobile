import { useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState("");

    const handleValue = (text) => {
        setValue(text);
    };

    const reset = () => {
        setValue("")
    }
    
    return [value, handleValue, reset];
};

;