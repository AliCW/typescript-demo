import * as React from "react";
import { useState } from "react";
import { Map } from "./Map";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ReactSlider from "react-slider";

interface MapValue {
    map: String;
    speed: Number;
}

function MapConfig( config: MapValue ) {
    return (
        <div>
            <h2 className="sub-header">{config.map}</h2>
            <h2 className="sub-header">{config.speed.toString()}</h2>
        </div>
    );
}

export default function Main(){
    const [speed, setSpeed] = useState(0.1);
    const [map, setMap] = useState("geoOrthographic")

    return (
        <div>
            <h1 className="header">Typescript Demonstration with React Simple Maps</h1>
                <FiChevronsLeft className="slider-arrow"/>
                    <ReactSlider
                            ariaLabel="globe-speed-slider"
                            min={-2}
                            max={2}
                            defaultValue={0.1}
                            step={0.1}
                            renderThumb={(props, state) => <div {...props}> {speed} </div>}
                            onChange={(state) => setSpeed(state)}
                            thumbClassName="slider-thumb"
                            withTracks={true}                
                    />
                <FiChevronsRight className="slider-arrow"/>
            <MapConfig map={map} speed={speed} />
            <Map speed={speed} />
        </div>
    );
}