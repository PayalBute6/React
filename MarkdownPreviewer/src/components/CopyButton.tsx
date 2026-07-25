import { useState } from "react";
import { copyToClipboard } from "../utils/clipboard";

interface CopyButtonProps {

    text: string;

    label: string;

}

function CopyButton({

    text,

    label

}: CopyButtonProps) {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {

        const success = await copyToClipboard(text);

        if (success) {

            setCopied(true);

            setTimeout(() => {

                setCopied(false);

            }, 1500);

        }

    };

    return (

        <button
            className="toolbar-btn"
            onClick={handleCopy}
        >

            {copied ? "✓ Copied!" : label}

        </button>

    );

}

export default CopyButton;