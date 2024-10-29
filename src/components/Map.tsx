import * as React from "react";
import { ComposableMap, Geographies, Geography, Graticule } from "react-simple-maps";
import { useState, useEffect } from "react"

interface MapConfig {
    map: String;
    speed: Number;
}

type Longitude = Number;
type MapHeight = Number;
type MapWidth = Number;
type MapScale = Number;

function Globe(config: MapConfig) {
    const [longitude, setLongitudeSpeed] = useState<Longitude>(0.1);
    const [mapHeight, setMapHeight] = useState<MapHeight>(30);
    const [mapWidth, setMapWidth] = useState<MapWidth>(50);
    const [mapScale, setMapScale] = useState<MapScale>(360);

    useEffect(() => {
        const tick = setInterval(() => {
            if(config.map === "geoOrthographic") {
                setMapHeight(30);
                setMapWidth(50);
                setMapScale(300);
            };
            if(config.map !== "geoOrthographic") {
                setMapHeight(23);
                setMapWidth(45);
                setMapScale(180);
            };
            if(config.speed === -2) setLongitudeSpeed(Number(longitude) - 2);
            else if(config.speed === -1.9) setLongitudeSpeed(Number(longitude) - 1.9);
            else if(config.speed === -1.8) setLongitudeSpeed(Number(longitude) - 1.8);
            else if(config.speed === -1.7) setLongitudeSpeed(Number(longitude) - 1.7);
            else if(config.speed === -1.6) setLongitudeSpeed(Number(longitude) - 1.6);
            else if(config.speed === -1.5) setLongitudeSpeed(Number(longitude) - 1.5);
            else if(config.speed === -1.4) setLongitudeSpeed(Number(longitude) - 1.4);
            else if(config.speed === -1.3) setLongitudeSpeed(Number(longitude) - 1.3);
            else if(config.speed === -1.2) setLongitudeSpeed(Number(longitude) - 1.2);
            else if(config.speed === -1.1) setLongitudeSpeed(Number(longitude) - 1.1);
            else if(config.speed === -1) setLongitudeSpeed(Number(longitude) - 1);
            else if(config.speed === -0.9) setLongitudeSpeed(Number(longitude) - 0.9);
            else if(config.speed === -0.8) setLongitudeSpeed(Number(longitude) - 0.8);
            else if(config.speed === -0.7) setLongitudeSpeed(Number(longitude) - 0.7);
            else if(config.speed === -0.6) setLongitudeSpeed(Number(longitude) - 0.6);
            else if(config.speed === -0.5) setLongitudeSpeed(Number(longitude) - 0.5);
            else if(config.speed === -0.4) setLongitudeSpeed(Number(longitude) - 0.4);
            else if(config.speed === -0.3) setLongitudeSpeed(Number(longitude) - 0.3);
            else if(config.speed === -0.2) setLongitudeSpeed(Number(longitude) - 0.2);
            else if(config.speed === -0.1) setLongitudeSpeed(Number(longitude) - 0.1);
            else if(config.speed === 0) setLongitudeSpeed(Number(longitude) + 0.00001);
            else if(config.speed === 0.1) setLongitudeSpeed(Number(longitude) + 0.1);
            else if(config.speed === 0.2) setLongitudeSpeed(Number(longitude) + 0.2);
            else if(config.speed === 0.3) setLongitudeSpeed(Number(longitude) + 0.3);
            else if(config.speed === 0.4) setLongitudeSpeed(Number(longitude) + 0.4);
            else if(config.speed === 0.5) setLongitudeSpeed(Number(longitude) + 0.5);
            else if(config.speed === 0.6) setLongitudeSpeed(Number(longitude) + 0.6);
            else if(config.speed === 0.7) setLongitudeSpeed(Number(longitude) + 0.7);
            else if(config.speed === 0.8) setLongitudeSpeed(Number(longitude) + 0.8);
            else if(config.speed === 0.9) setLongitudeSpeed(Number(longitude) + 0.9);
            else if(config.speed === 1) setLongitudeSpeed(Number(longitude) + 1);
            else if(config.speed === 1.1) setLongitudeSpeed(Number(longitude) + 1.1);
            else if(config.speed === 1.2) setLongitudeSpeed(Number(longitude) + 1.2);
            else if(config.speed === 1.3) setLongitudeSpeed(Number(longitude) + 1.3);
            else if(config.speed === 1.4) setLongitudeSpeed(Number(longitude) + 1.4);
            else if(config.speed === 1.5) setLongitudeSpeed(Number(longitude) + 1.5);
            else if(config.speed === 1.6) setLongitudeSpeed(Number(longitude) + 1.6);
            else if(config.speed === 1.7) setLongitudeSpeed(Number(longitude) + 1.7);
            else if(config.speed === 1.8) setLongitudeSpeed(Number(longitude) + 1.8);
            else if(config.speed === 1.9) setLongitudeSpeed(Number(longitude) + 1.9);
            else if(config.speed === 2) setLongitudeSpeed(Number(longitude) + 2);
        }, 10);
        return () => clearInterval(tick);
    }, [longitude]);

    return (
        <div>
            <div className="map-div" style={{"height": `${mapHeight}%`, "width": `${mapWidth}%`}}>
                <ComposableMap
                    className="map"
                    projection={config.map.toString()}
                    projectionConfig={{
                        rotate: [Number(longitude), -15, 5],
                        center: [0, 0],
                        scale: Number(mapScale),
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

export function Map( configuration: MapConfig ) {

    return (
        <div>
            <Globe map={configuration.map} speed={configuration.speed}/>
        </div>
    );
}