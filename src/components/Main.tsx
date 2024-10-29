import * as React from "react";
import { useState } from "react";
import { Map } from "./Map";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import ReactSlider from "react-slider";

interface MapValue {
    map: String;
    speed: Number;
};

function MapConfig( config: MapValue ) {
    return (
        <div>
            <h2 className="sub-header">Map: {config.map}   |   Spin: {config.speed.toString()}</h2>
        </div>
    );
};

export default function Main(){
    const [speed, setSpeed] = useState(0.1);
    const [selectedMap, setSelectedMap] = useState({ map: "geoOrthographic" });

    const mapTypeArray = ["geoOrthographic", "geoAlbers", "geoAzimuthalEqualArea", 
        "geoAzimuthalEquidistant","geoEqualEarth", "geoConicConformal", "geoConicEqualArea", 
        "geoConicEquidistant","geoStereographic", "geoMercator", "geoTransverseMercator"
    ];

    return (
        <div>
            <h1 className="header">Typescript Demonstration with React Simple Maps</h1>
            <label className="eclipse-label" style={{"marginLeft": "5px"}}> Map Type: </label>
                <select className="eclipse-dropdown" onChange={(event) => setSelectedMap({ map: event.currentTarget.value})}>
                    {mapTypeArray.map((type) => {
                        return (
                            <option 
                            className="eclipse-element"
                            value={type} 
                            key={type}>
                                {type}
                            </option>
                        );
                    })};
                </select>
            <br></br>
            <FiChevronsLeft className="slider-arrow" />
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
            
            <Map map={selectedMap.map} speed={speed} />
            <MapConfig map={selectedMap.map} speed={speed} />
        </div>
    );
};