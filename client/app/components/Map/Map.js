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

        let url = "/freegan";
        let http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onload = function() {
          if (http.readyState === 4) {
            if (http.status === 200) {
              
              let res = JSON.parse(http.response);
              console.log(res);
              for (let row of res) {

                  L.marker([row.lat, row.lng])
                  .bindPopup(row.description)
                  .addTo(mymap);
                  }
            }
          }
        }

        
       // L.marker([51.5, -0.09]).addTo(mymap);
          
    

  }
  //  updateMarkers(location, popup_title, popup_texts, marker_type) {
  //   let key = location[0].toFixed(4) + "," + location[1].toFixed(4);
  //   this.list.set(key, this.count);
  //   let popup_directive =
  //     `&emsp;<button id='button` +
  //     this.count +
  //     `'>Directions</button><br/><br/>`;
  //   this.count++;
  //   if (marker_type === "store") {
  //     L.marker(location)
  //       .bindPopup(popup_title + popup_directive + popup_texts)
  //       .bindTooltip(popup_title, { direction: "left" })
  //       .openTooltip()
  //       .addTo(this.stores);
  //   } else if (marker_type === "spot") {
  //     L.marker(location, { icon: this.spotIcon })
  //       .bindPopup(popup_title + popup_directive + popup_texts)
  //       .bindTooltip(popup_title)
  //       .openTooltip()
  //       .addTo(this.spots);
  //   }
  // }
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