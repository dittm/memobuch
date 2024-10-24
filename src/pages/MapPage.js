import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";

export default function App() {
    // markers
    const markers = [
        {
            geocode: [47.07047244364072, 15.418390626680512],
            popUp: "Pop up No. 1",
        },
        {
            geocode: [47.07653557612596, 15.456218298747107],
            popUp: "Pop up No. 2",
        },
        {
            geocode: [47.07017782579421, 15.431346915296237],
            popUp: "Pop up No. 3",
        },
    ];

    // Custom icon for markers
    const customIcon = new Icon({
        iconUrl: "/location.png", // Ensure the icon is in the public folder
        iconSize: [38, 41], // size of the icon
        iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -41],  // point from which the popup should open relative to the iconAnchor
    });

    return (
        <MapContainer center={[47.0679, 15.4417]} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup>
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={customIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
