import React, { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const center = [19.115635976651856, 72.8291416170203];
const markerIcon = new L.Icon({
    iconUrl: require("../images/marker.png"),
    iconSize: [35, 35],
})
function GMap() {
    const mapRef = useRef();
    return (
        <MapContainer
            center={center}
            zoom={10}
            style={{ width: '100vw', height: '100vh' }}
            ref={mapRef}
        >
            <TileLayer
                url='https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=GCrOaQueIQ4AmML6iiTF'
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker position={[19.115635976651856, 72.8291416170203]} icon={markerIcon}>
                <Popup>
                    <b>Hello</b>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default GMap