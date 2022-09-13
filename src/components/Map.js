import React, {useState} from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import NavBar from "./NavBar";

const Map = ({ eventData }) => {

    const hanldeClick = () => {
        setLocationInfo(null)
    }
    
   document.body.addEventListener('click', hanldeClick, true);

    const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((ev) => {

    if (ev.categories[0].id === 8) {
      return <LocationMarker
      key={ev.id}
      lat={ev.geometries[0].coordinates[1]}
      lng={ev.geometries[0].coordinates[0]}
      onClick={()=> setLocationInfo({id: ev.id, title: ev.title })}
    />;
    }
    return null;
  });

  const defaultProps = {
    center: {
      lat: 60.192059,
      lng: 24.945831,
    },
    zoom: 3,
  };

  return (
    <div
    className="z-0"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "purple",
        position: "relative",
        
      }}
    >
      <NavBar />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBKAhr6gynhM__KTVxV26AjFQjF9_ESBUg",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo}/>}
    </div>
  );
};

export default Map;
