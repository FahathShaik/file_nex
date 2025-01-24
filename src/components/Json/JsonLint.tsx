import React, {useCallback, useState} from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import {json} from "@codemirror/lang-json";
import useGoBack from "../navigations/useGoBack.ts";
import BackButton from "../BackButtonProps.tsx";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

function JsonLint(): JSX.Element {
    const [value, setValue] = useState<string>(
        '{"name": "John","age": 30,"city": "New York"}'
    );
    const [copied, setCopied] = useState<boolean>(false);

    const onChange = useCallback((val: string): void => {
        setValue(val);
        setCopied(false);
    }, []);

    const copyToClipboard = useCallback((): void => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((error) => console.error("Copy failed:", error));
    }, [value]);

    const formatJson = useCallback((): void => {
        try {
            if (value.trim()) {
                const formatted = JSON.parse(value);
                setValue(JSON.stringify(formatted, null, 2));
            }
        } catch (error) {
            console.error("JSON Formatting Error:", error);
            getInvalidJsonAlert();
        }
    }, [value]);

    const clearJson = useCallback((): void => {
        setValue("");
    }, []);

    const compressJson = useCallback((): void => {
        try {
            if (value.trim()) {
                const compressed = JSON.parse(value);
                setValue(JSON.stringify(compressed));
            }
        } catch (error) {
            console.error("JSON Compression Error:", error);
            getInvalidJsonAlert();
        }
    }, [value]);

    const isDisabled = !value.trim();

    return (
        <>
            <BackButton onClick={useGoBack()}/>

            <nav aria-label="breadcrumb" className="breadcrumb-custom">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/" className="breadcrumb-link">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/code-tools" className="breadcrumb-link">Code Tools</Link>
                    </li>
                    <li className="breadcrumb-item breadcrumb-active" aria-current="page">
                        Json Lint
                    </li>
                </ol>
            </nav>


            <div style={styles.container}>
                <h4 className="text-black-50">
                    To format and validate your JSON, just copy + paste it below:
                </h4>
                <div style={styles.editorButtonsContainer}>
                    <div style={{...styles.editorContainer, position: "relative"}}>
                        <ReactCodeMirror
                            value={value}
                            height="60vh"
                            width="100%"
                            extensions={[json()]}
                            onChange={onChange}
                            style={styles.codeMirror}
                        />

                        <button
                            className="p-2 bg-light border border-secondary text-secondary"
                            style={copyButtonStyle}
                            title="Copy to clipboard"
                            onClick={copyToClipboard}
                        >
                            {copied ? (
                                <TickIcon/>
                            ) : (
                                <CopyIcon/>
                            )}
                        </button>
                    </div>
                    <div style={styles.buttonsContainer}>
                        <button
                            onClick={formatJson}
                            style={getButtonStyle(isDisabled, "#1a7e1f", "#c4c4c4")}
                            disabled={isDisabled}
                        >
                            Format JSON
                        </button>
                        <button
                            onClick={clearJson}
                            style={getButtonStyle(false, "#ff3b3b")}
                        >
                            Clear
                        </button>
                        <button
                            onClick={compressJson}
                            style={getButtonStyle(false, "#0077ff")}
                        >
                            Compress
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

const TickIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="green"
        viewBox="0 0 24 24"
    >
        <path
            d="M20.285 6.708a1 1 0 0 0-1.415-1.416L9 15.162l-3.87-3.87a1 1 0 0 0-1.415 1.415l4.577 4.578a1 1 0 0 0 1.415 0L20.285 6.708z"/>
    </svg>
);

const CopyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 512 512"
    >
        <path
            d="M448 0H224C188.7 0 160 28.65 160 64v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C512 28.65 483.3 0 448 0zM464 288c0 8.822-7.178 16-16 16H224C215.2 304 208 296.8 208 288V64c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16V288zM304 448c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V224c0-8.822 7.178-16 16-16h64V160H64C28.65 160 0 188.7 0 224v224c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64v-64h-48V448z"/>
    </svg>
);

const getButtonStyle = (
    disabled: boolean,
    enabledBg: string,
    disabledBg: string = "#c4c4c4",
    enabledColor: string = "#fff",
    disabledColor: string = "#6b6b6b"
): React.CSSProperties => ({
    padding: "10px 20px",
    backgroundColor: disabled ? disabledBg : enabledBg,
    color: disabled ? disabledColor : enabledColor,
    border: "none",
    borderRadius: "5px",
    cursor: disabled ? "not-allowed" : "pointer",
});

const getInvalidJsonAlert = () => {
    Swal.fire({
        title: "Invalid JSON",
        text: "Please check the format.",
        icon: "warning",
        confirmButtonText: "Got it",
    });
};


const copyButtonStyle: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 10,
    borderRadius: "25%",
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        fontFamily: "Source Code Pro",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        minHeight: "calc(100vh - 80px)",
    },
    editorButtonsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "flex-start",
        width: "100%",
    },
    editorContainer: {
        flexGrow: 1,
        width: "70%",
    },
    codeMirror: {
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        width: "15%",
    },
};

export default JsonLint;
