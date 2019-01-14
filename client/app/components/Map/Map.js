import React from "react";
import L from "leaflet";


class Map extends React.Component {
    constructor(props) {
      super(props);
      
    }
    componentDidMount() {
        var mymap = L.map("map", {
            touchZoom: true,
            bounceAtZoomLimits: false,
          }).setView([40.7831, -73.9712], 12);
        mymap.invalidateSize();
          L.tileLayer(
            "https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
              accessToken:
                "pk.eyJ1IjoibWFpbGF3IiwiYSI6ImNqcXF2Mjc1bzBnaGgzd3BlYTliNTdrNGgifQ.Bh1wfyYCaRPzYYrOQoBgvw",
              maxZoom: 18,
              id: "mapbox.streets",
              tileSize: 512,
              zoomOffset: -1,
              attribution:
                '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }
          ).addTo(mymap);
              
          setTimeout(function () {  mymap.invalidateSize() }, 100);

          var marker = L.marker([40.7831, -73.9712]).addTo(mymap);
        //   this.route = L.Routing.control({
        //     position: "topleft",
        //     routeWhileDragging: true,
        //     collapsible: true,
        //     show: false,
        //     geocoder: L.Control.Geocoder.nominatim(),
        //     lineOptions: {
        //       styles: [{ color: "#4B9CD3", opacity: 0.7, weight: 7 }]
        //     },
        //     router: L.Routing.mapbox(
        //       "pk.eyJ1IjoicWlhb2ZlbmdtYXJjbyIsImEiOiJjam85aWludHAwNWd2M3FtazBnMWJka2tjIn0.z7xc-bNrxVuieK6h71x7tg"
        //     )
        //   });
        //   this.route.addTo(this.map);
    }
    render() {
        return (
            
          <div>
            <h1> Site Directory Map</h1>
            <div id="map"></div>
          </div>
        );
      }
    
}

// import React from 'react';

// import { Link } from 'react-router-dom';

// const Map = () => (
//   <p>test</p>
// );




// import { Link } from 'react-router-dom';

// const Map = () => (
//   <div id="mymap">mymap </div>
// );

export default Map;