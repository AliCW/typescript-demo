import * as React from 'react';
import { ComposableMap, Geographies, Geography, Graticule } from "react-simple-maps";


function Globe({ speed }: { speed: Number}) {
    return (
        <div>
            <div className="map" style={{ height: "50%", width: "80%" }}>
                <ComposableMap
                    projection={"geoOrthographic"}
                    projectionConfig={{
                        rotate: [0, -15, 5],
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

export function Map() {
    return (
        <div>
            <Globe speed={1} />
        </div>
    );
}