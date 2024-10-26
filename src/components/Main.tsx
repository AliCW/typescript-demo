import * as React from "react";
import { useState } from "react";
import { Map } from "./Map";
import ReactSlider from "react-slider";

function Speed({ num }: { num: Number }) {
    return (
        <h2 className="sub-header">{num.toString()}</h2>
    );
}


export default function Main(){
    const [speed, setSpeed] = useState(0.1);

    return (
        <div>
            <h1 className="header">Typescript Demo</h1>
            <ReactSlider
                    ariaLabel="globe-speed-slider"
                    min={-2}
                    max={2}
                    defaultValue={0.1}
                    step={0.1}
                    renderThumb={(props, state) => <div {...props}> | </div>}
                    onChange={(state) => setSpeed(state)}
                    thumbClassName="speed-slider-thumb"
                    withTracks={true}                
            />
            <Speed num={speed} />
            <Map speed={speed} />
        </div>
    );
}