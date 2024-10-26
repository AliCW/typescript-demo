import * as React from "react";
import { ComposableMap, Geographies, Geography, Graticule } from "react-simple-maps";
import { useState, useEffect } from "react"

function Globe({ speed }: { speed: Number}) {
    const [longitude, setLongitudeSpeed] = useState(0.1);

    useEffect(() => {
        const tick = setInterval(() => {
            if(speed === -2) setLongitudeSpeed(longitude - 2);
            if(speed === -1.9) setLongitudeSpeed(longitude - 1.9);
            if(speed === -1.8) setLongitudeSpeed(longitude - 1.8);
            if(speed === -1.7) setLongitudeSpeed(longitude - 1.7);
            if(speed === -1.6) setLongitudeSpeed(longitude - 1.6);
            if(speed === -1.5) setLongitudeSpeed(longitude - 1.5);
            if(speed === -1.4) setLongitudeSpeed(longitude - 1.4);
            if(speed === -1.3) setLongitudeSpeed(longitude - 1.3);
            if(speed === -1.2) setLongitudeSpeed(longitude - 1.2);
            if(speed === -1.1) setLongitudeSpeed(longitude - 1.1);
            if(speed === -1) setLongitudeSpeed(longitude - 1);
            if(speed === -0.9) setLongitudeSpeed(longitude - 0.9);
            if(speed === -0.8) setLongitudeSpeed(longitude - 0.8);
            if(speed === -0.7) setLongitudeSpeed(longitude - 0.7);
            if(speed === -0.6) setLongitudeSpeed(longitude - 0.6);
            if(speed === -0.5) setLongitudeSpeed(longitude - 0.5);
            if(speed === -0.4) setLongitudeSpeed(longitude - 0.4);
            if(speed === -0.3) setLongitudeSpeed(longitude - 0.3);
            if(speed === -0.2) setLongitudeSpeed(longitude - 0.2);
            if(speed === -0.1) setLongitudeSpeed(longitude - 0.1);
            if(speed === 0) setLongitudeSpeed(longitude + 0.00001);
            if(speed === 0.1) setLongitudeSpeed(longitude + 0.1);
            if(speed === 0.2) setLongitudeSpeed(longitude + 0.2);
            if(speed === 0.3) setLongitudeSpeed(longitude + 0.3);
            if(speed === 0.4) setLongitudeSpeed(longitude + 0.4);
            if(speed === 0.5) setLongitudeSpeed(longitude + 0.5);
            if(speed === 0.6) setLongitudeSpeed(longitude + 0.6);
            if(speed === 0.7) setLongitudeSpeed(longitude + 0.7);
            if(speed === 0.8) setLongitudeSpeed(longitude + 0.8);
            if(speed === 0.9) setLongitudeSpeed(longitude + 0.9);
            if(speed === 1) setLongitudeSpeed(longitude + 1);
            if(speed === 1.1) setLongitudeSpeed(longitude + 1.1);
            if(speed === 1.2) setLongitudeSpeed(longitude + 1.2);
            if(speed === 1.3) setLongitudeSpeed(longitude + 1.3);
            if(speed === 1.4) setLongitudeSpeed(longitude + 1.4);
            if(speed === 1.5) setLongitudeSpeed(longitude + 1.5);
            if(speed === 1.6) setLongitudeSpeed(longitude + 1.6);
            if(speed === 1.7) setLongitudeSpeed(longitude + 1.7);
            if(speed === 1.8) setLongitudeSpeed(longitude + 1.8);
            if(speed === 1.9) setLongitudeSpeed(longitude + 1.9);
            if(speed === 2) setLongitudeSpeed(longitude + 2);
        }, 10);
        return () => clearInterval(tick);
    }, [longitude]);

    return (
        <div>
            <div className="map" style={{ height: "50%", width: "80%" }}>
                <ComposableMap
                    projection={"geoOrthographic"}
                    projectionConfig={{
                        rotate: [longitude, -15, 5],
                        center: [0, -40],
                        scale: 180,
                    }}
                    style={{
                        "backgroundColor": `${"#ffffffd2"}`,
                    }}
                >
                    <Graticule stroke={"#3d3d3d"} />
                    <Geographies geography={"./countries-110m.json"}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography key={geo.rsmKey} geography={geo}/>
                            ))
                        }
                    </Geographies>

                </ComposableMap>
            </div>
        </div>       
    );
}

export function Map({ speed }: { speed: Number}) {

    return (
        <div>
            <Globe speed={speed} />
        </div>
    );
}