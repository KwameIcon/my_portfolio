import { useJsApiLoader } from "@react-google-maps/api";
import CustomeModal from "./commons/modal";

const containerStyle = {
    width: "100%",
    height: "500px",
};

// 👇 Your base location (Teshie, Accra)
const myLocation = {
    lat: 40.749933,
    lng: -73.98633,
};

export default function LocateMe() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAeAt0dfBO5Ek4EAecDYQzjGnK-Ea7z4W4",
    });

    if (!isLoaded) return <p>Loading Map...</p>;

    return (
        <CustomeModal title="Locate Me" type="locate" id="locate">
            <iframe src="https://storage.googleapis.com/maps-solutions-b0cjn9092h/locator-plus/hndv/locator-plus.html"
                width="100%" height="100%"
                style={{ border: 0 }}
                loading="lazy">
            </iframe>
        </CustomeModal>
    );
}
