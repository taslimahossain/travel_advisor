import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core'; 
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab/Rating";

// import mapStyles from "../../mapStyles";
import useStyles from './styles';

// const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
//     const matches = useMediaQuery('(min-width:600px)');
const Map = ({ setCoordinates, setBounds, coordinates }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    
    // const coordinates = { lat: 51.509865, lng: -0.118092 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBreckLTyhr739bZGqK8bk7vzfdzQpnMQI' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}
// const Map = () => {
//     return (
//         <h1>Map</h1>
//     );
// }

export default Map;