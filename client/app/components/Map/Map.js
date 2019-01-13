import React from "react";
import L from "leaflet";


class Map extends React.Component {
    constructor(props) {
      super(props);
      
    }
    componentDidMount() {
        var mymap = L.map("mapid", {
            touchZoom: true,
            bounceAtZoomLimits: false,
          }).setView([40.7831, -73.9712], 12);

        //   var mymap = L.map('mapid').setView([51.505, -0.09], 13);

        //   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //         maxZoom: 18,
        //         id: 'mapbox.streets',
        //         accessToken: 'pk.eyJ1IjoibWFpbGF3IiwiYSI6ImNqcXF2Mjc1bzBnaGgzd3BlYTliNTdrNGgifQ.Bh1wfyYCaRPzYYrOQoBgvw'
        //     }).addTo(mymap);
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
            <div id="mapid"></div>
            <h1>test</h1>
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