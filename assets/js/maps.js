//code was taken from google maps api. Code was altered to suit website needs//

function initMap() {
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    const points = [
    {lat: 54.607868,
     lng:  -5.926437,
     content:"Belfast"},
     //Belfast

    { lat: 52.25833,
     lng: -7.11194,
     content:"waterford",
    },
    //Waterford

      { lat:  55.007,
     lng: -7.318268,
     content:"Derry",
     },
     //Derry

      { lat:  54.26969,
     lng:  -8.46943,
     content:"Sligo",
     },

      { lat:  53.350140,
     lng: -6.266155,
     content:"Dublin",
     },
     //Dublin

      { lat:  53.43333,
     lng:  -7.95,
     content:"Athlone",
     },
     //Athlone

      { lat: 54.65, 
     lng: -8.11667,
     content:"Donegal",
     },
     //Donegal

      { lat: 52.061413,
     lng: -9.526437,
     content:"Kerry",
     },
     //Kerry

      { lat:  53.270962,
     lng: -9.062691,
     content:"Galway",
     },
     //Galway

      { lat:  51.903614,
     lng:  -8.468399,
     content:"Cork",
     },
     //Cork

      { lat:  52.668018,
     lng: -8.630498,
     content:"Limerick",
     },
     //Limerick

      { lat:  52.65417,
     lng: -7.25222,
     content:"Kilkenny",
     },
     //Kilkenny

    ];
    
    //Map is centred on Ireland 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6.55,
      center: {lat:53.5,lng:-7.6},
      zoomControl: true,
    });

    const options = {
        fields: ["formatted_address", "geometry", "name"],
    };

    points.map(point=>{
          const infowindow = new google.maps.InfoWindow({
              content: point.content,
            });
            const marker = new google.maps.Marker({
                position: {lat:point.lat,lng:point.lng},
                map,
                title: point.content,
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
            markers.push(marker);
        });

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29),
    });

     const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setComponentRestrictions({
        country: ["ie","gb"]});
        autocomplete.bindTo("bounds", map);

