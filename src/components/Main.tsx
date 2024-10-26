import * as React from "react";
import { Map } from "./Map";

function HelloWorld({ message }: { message: string }) {
    return (
        <h2 className="sub-header">{message}</h2>
    );
}

export default function Main(){
    return (
        <div>
            <h1 className="header">Typescript Demo</h1>
            <HelloWorld message="hello world" />
            <Map />
        </div>
    );
}