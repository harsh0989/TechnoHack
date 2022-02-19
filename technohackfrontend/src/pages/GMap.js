import React, { useRef, useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";


const markerIcon = new L.Icon({
    iconUrl: require("../images/marker.png"),
    iconSize: [35, 35],
})



function GMap() {
    const mapRef = useRef();
    const [center, setCenter] = useState({ lat: '', lon: '' })

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }, [navigator.geolocation])

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
        setCenter({ lat: position.coords.latitude, lon: position.coords.longitude });
    }

    return (
        <MapContainer
            center={center}
            zoom={2}
            style={{ width: '100%', height: '100%' }}
            ref={mapRef}
        >
            <TileLayer
                url='https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=GCrOaQueIQ4AmML6iiTF'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker position={center} icon={markerIcon}>
                <Popup>
                    <b>Hello</b>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default GMap