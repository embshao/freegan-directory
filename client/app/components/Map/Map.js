import React from "react";
import L from "leaflet";
import BeautifyIcon from "./BeautifyIcon";
import Site from "../Site/Site";
import Typography from "@material-ui/core/Typography";
const mapstyle = {
  display: "inline-block"
};

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var mymap = L.map("map", {
      touchZoom: true,
      bounceAtZoomLimits: false
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

    setTimeout(function() {
      mymap.invalidateSize();
    }, 100);

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
            var options = {
              iconShape: "doughnut",
              borderWidth: 5,
              borderColor: "#449B2E"
            };
            L.marker([row.lat, row.lng], {
              icon: L.BeautifyIcon.icon(options)
            })
              .bindPopup(row.description)
              .addTo(mymap);
          }
        }
      }
    };
  }

  render() {
    return (
      <div>
        <div id="map" style={mapstyle} />
      </div>
    );
  }
}

export default Map;
