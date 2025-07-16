import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

interface RoutingControlProps {
    waypoints: [number, number][];
}

export default function RoutingControl({ waypoints }: RoutingControlProps) {
    const map = useMap();

    useEffect(() => {
        if (!map || waypoints.length < 2) return;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const routingControl = L.Routing.control({
            waypoints: waypoints.map(([lat, lng]) => L.latLng(lat, lng)),
            routeWhileDragging: false,
            show: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false,
            createMarker: () => null,
        }).addTo(map);

        return () => {
            map.removeControl(routingControl);
        };
    }, [map, waypoints]);

    return null;
}
