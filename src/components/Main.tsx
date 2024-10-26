import * as React from "react";

function HelloWorld({ message }: { message: string }) {
    return (
        <h2>{message}</h2>
    );
}

export default function Main(){
    return (
        <div>
            <h1>Typescript Demo</h1>
            <HelloWorld message="hello world" />
        </div>
    );
}