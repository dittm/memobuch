import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useNavigate } from "react-router-dom";

const MiniMap = () => {
    const navigate = useNavigate();

    // Sample markers (same as in your main map)
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
        iconSize: [20, 30], // Smaller size for the mini map
        iconAnchor: [10, 30],
        popupAnchor: [0, -30],
    });

    const handleClick = () => {
        navigate("/map"); // Navigate to the map page
    };

    return (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <MapContainer center={[47.0679, 15.4417]} zoom={10} style={{ height: "200px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={marker.geocode} icon={customIcon}>
                        <Popup>{marker.popUp}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MiniMap;