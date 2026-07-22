import { useState } from "react";

export default function useMarkdown() {
    
    const [markdown, setMarkdown] = useState<string>("# Welcome to my project");
    
    return {
        markdown,
        setMarkdown
    };
    
}