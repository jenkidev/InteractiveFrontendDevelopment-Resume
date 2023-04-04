function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 40.967175642407305,
            lng: -73.90274815959594
        }
    });
   
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
    const locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 }
   ];
   
    const markers = locations.map((position, i) => {
        const label = labels[i % labels.length];
        const marker = new google.maps.Marker({
          position,
          label,
        });
    
        marker.addListener("click", () => {
          infoWindow.setContent(label);
          infoWindow.open(map, marker);
        });
        return marker;
      });
   
      const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });
   
   };