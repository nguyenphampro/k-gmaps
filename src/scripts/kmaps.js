;
(function($) {
    $.fn.extend({
        kmaps: function(maps_options) {

            var new_maps_options = maps_options;

            var defaultval = {
                zoom: 15,
                Lng: 0,
                Lat: 0,
                MarginLat: 0,
                MarginLng: 0,
                center: true,
                scrollwheel: true,
                draggable: true,
                disableDefaultUI: true,
                styles: 'default',
                imgMap: 'http://maps.google.com/mapfiles/ms/micons/red.png', // https://sites.google.com/site/gmapsdevelopment/
                mapTypeId: 'ROADMAP',
                infoWindow: '',
                InfoWidth: 400,
                OpenURL: 'view full map',
                disableOpenURL: true,
                disableDoubleClickZoom: false,
                fullscreenControl: false,
                Title: '',
                Address: ''
            };

            return this.each(function(elm) {
                var me = $(this);

                var checkClass = {
                    zoom: me.find('.mapZoom').text(),
                    Lng: me.find('.Lng').text(),
                    Lat: me.find('.Lat').text(),
                    MarginLat: me.find('.MarginLat').text(),
                    MarginLng: me.find('.MarginLng').text(),
                    center: me.find('.mapCenter').text(),
                    scrollwheel: me.find('.scrollwheel').text(),
                    draggable: me.find('.draggable').text(),
                    disableDefaultUI: me.find('.disableDefaultUI').text(),
                    styles: me.find('.mapStyle').text(),
                    imgMap: me.find('.imgMap').text(),
                    mapTypeId: me.find('.mapType').text(),
                    infoWindow: me.find('.infoWindow').html(),
                    InfoWidth: me.find('.infoWidth').text(),
                    OpenURL: me.find('.OpenURL').text(),
                    Title: me.find('.Title').text(),
                    Address: me.find('address').text(),
                    disableDoubleClickZoom: me.find('.disableDoubleClickZoom').text(),
                    fullscreenControl: me.find('.fullscreenControl').text(),
                    disableOpenURL: me.find('.disableOpenURL').text()
                };

                if (!new_maps_options) {
                    var op = {
                        zoom: checkClass.zoom ? parseInt(checkClass.zoom) : defaultval.zoom,
                        Lng: checkClass.Lng ? checkClass.Lng : defaultval.Lng,
                        Lat: checkClass.Lat ? checkClass.Lat : defaultval.Lat,
                        MarginLat: checkClass.MarginLat ? checkClass.MarginLat : defaultval.MarginLat,
                        MarginLng: checkClass.MarginLng ? checkClass.MarginLng : defaultval.MarginLng,
                        center: checkClass.center ? checkClass.center : defaultval.center,
                        scrollwheel: checkClass.scrollwheel ? checkClass.scrollwheel : defaultval.scrollwheel,
                        draggable: checkClass.draggable ? checkClass.draggable : defaultval.draggable,
                        disableDefaultUI: checkClass.disableDefaultUI ? checkClass.disableDefaultUI : defaultval.disableDefaultUI,
                        styles: checkClass.styles ? checkClass.styles : defaultval.Styles,
                        imgMap: checkClass.imgMap ? checkClass.imgMap : defaultval.imgMap,
                        mapTypeId: checkClass.mapTypeId ? checkClass.mapTypeId : defaultval.mapType,
                        infoWindow: checkClass.infoWindow ? checkClass.infoWindow : defaultval.infoWindow,
                        InfoWidth: checkClass.InfoWidth ? checkClass.InfoWidth : defaultval.InfoWidth,
                        Title: checkClass.Title ? checkClass.Title : defaultval.Title,
                        OpenURL: checkClass.OpenURL ? checkClass.OpenURL : defaultval.OpenURL,
                        disableOpenURL: checkClass.disableOpenURL ? checkClass.disableOpenURL : defaultval.disableOpenURL,
                        fullscreenControl: checkClass.fullscreenControl ? checkClass.fullscreenControl : defaultval.fullscreenControl,
                        disableDoubleClickZoom: checkClass.disableDoubleClickZoom ? checkClass.disableDoubleClickZoom : defaultval.disableDoubleClickZoom,
                        Address: checkClass.Address ? checkClass.Address : defaultval.Address

                    };
                } else {
                    var op = {
                        zoom: maps_options.zoom ? parseInt(maps_options.zoom) : defaultval.zoom,
                        Lng: maps_options.Lng ? maps_options.Lng : defaultval.Lng,
                        Lat: maps_options.Lat ? maps_options.Lat : defaultval.Lat,
                        MarginLat: maps_options.MarginLat ? maps_options.MarginLat : defaultval.MarginLat,
                        MarginLng: maps_options.MarginLng ? maps_options.MarginLng : defaultval.MarginLng,
                        center: maps_options.center ? maps_options.center : defaultval.center,
                        scrollwheel: maps_options.scrollwheel ? maps_options.scrollwheel : defaultval.scrollwheel,
                        draggable: maps_options.draggable ? maps_options.draggable : defaultval.draggable,
                        disableDefaultUI: maps_options.disableDefaultUI ? maps_options.disableDefaultUI : defaultval.disableDefaultUI,
                        styles: maps_options.styles ? maps_options.styles : defaultval.Styles,
                        imgMap: maps_options.imgMap ? maps_options.imgMap : defaultval.imgMap,
                        mapTypeId: maps_options.mapTypeId ? maps_options.mapTypeId : defaultval.mapType,
                        infoWindow: maps_options.infoWindow ? maps_options.infoWindow : defaultval.infoWindow,
                        InfoWidth: maps_options.InfoWidth ? maps_options.InfoWidth : defaultval.InfoWidth,
                        Title: maps_options.Title ? maps_options.Title : defaultval.Title,
                        OpenURL: maps_options.OpenURL ? maps_options.OpenURL : defaultval.OpenURL,
                        disableOpenURL: maps_options.disableOpenURL ? maps_options.disableOpenURL : defaultval.disableOpenURL,
                        disableDoubleClickZoom: maps_options.disableDoubleClickZoom ? maps_options.disableDoubleClickZoom : defaultval.disableDoubleClickZoom,
                        fullscreenControl: maps_options.fullscreenControl ? maps_options.fullscreenControl : defaultval.fullscreenControl,
                        Address: maps_options.Address ? maps_options.Address : defaultval.Address
                    };
                }

                function CenterControl(controlDiv, map) {
                    var urlFull = 'https://www.google.com/maps/place/';
                    // Set CSS for the control border.
                    var controlUI = document.createElement('div');
                    controlUI.style.backgroundColor = '#fff';
                    controlUI.style.border = '2px solid #fff';
                    controlUI.style.borderRadius = '2px';
                    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                    controlUI.style.cursor = 'pointer';
                    controlUI.style.marginBottom = '5px';
                    controlUI.style.marginTop = '10px';
                    controlUI.style.marginRight = '10px';
                    controlUI.style.textAlign = 'center';
                    controlUI.title = 'Click to view full map';
                    controlDiv.appendChild(controlUI);

                    // Set CSS for the control interior.
                    var controlText = document.createElement('div');
                    controlText.style.color = 'rgb(25,25,25)';
                    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                    controlText.style.fontSize = '12px';
                    controlText.style.lineHeight = '1.5rem';
                    controlText.style.paddingLeft = '3px';
                    controlText.style.paddingRight = '3px';
                    if (op.Address) {
                        controlText.innerHTML = '<a target=_blank href="' + urlFull + op.Address + '/@' + op.Lat + ',' + op.Lng + ',' + op.zoom + 'z">' + op.OpenURL + '</a>';
                    } else {
                        controlText.innerHTML = '<a target=_blank href="' + urlFull + '@' + op.Lat + ',' + op.Lng + ',' + op.zoom + 'z">' + op.OpenURL + '</a>';
                    }
                    controlUI.appendChild(controlText);

                    controlUI.addEventListener('click', function() {

                    });

                };

                // Styles
                if (op.styles == 'default') {
                    var mapStyle = '';
                } else if (op.styles == 'white') {
                    var mapStyle = [{
                        "featureType": "landscape",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 65
                        }, {
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "poi",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 51
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 30
                        }, {
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "road.local",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 40
                        }, {
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "transit",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "administrative.province",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "lightness": -25
                        }, {
                            "saturation": -100
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "hue": "#ffff00"
                        }, {
                            "lightness": -25
                        }, {
                            "saturation": -97
                        }]
                    }];
                } else if (op.styles == 'black') {
                    var mapStyle = [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        }, {
                            "color": "#000000"
                        }, {
                            "lightness": 40
                        }]
                    }, {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#000000"
                        }, {
                            "lightness": 16
                        }]
                    }, {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 20
                        }]
                    }, {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 17
                        }, {
                            "weight": 1.2
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 20
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 21
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 17
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 29
                        }, {
                            "weight": 0.2
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 18
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 16
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 19
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#000000"
                        }, {
                            "lightness": 17
                        }]
                    }];
                } else if (op.styles == 'river') {
                    var mapStyle = [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 45
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#46bcec"
                        }, {
                            "visibility": "on"
                        }]
                    }];
                } else if (op.styles == 'cyan') {
                    var mapStyle = [{
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#e0efef"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "hue": "#1900ff"
                        }, {
                            "color": "#c0e8e8"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "lightness": 100
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "lightness": 700
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#7dcdcd"
                        }]
                    }];
                } else if (op.styles == 'green') {
                    var mapStyle = [{
                        "featureType": "landscape.man_made",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#f7f1df"
                        }]
                    }, {
                        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#d0e3b4"
                        }]
                    }, {
                        "featureType": "landscape.natural.terrain",
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.business",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi.medical",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#fbd3da"
                        }]
                    }, {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#bde6ab"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffe15f"
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#efd151"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#ffffff"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "black"
                        }]
                    }, {
                        "featureType": "transit.station.airport",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#cfb2db"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#a2daf2"
                        }]
                    }];
                } else if (op.styles == 'metan') {
                    var mapStyle = [{
                        "featureType": "administrative.locality",
                        "elementType": "all",
                        "stylers": [{
                            "hue": "#2c2e33"
                        }, {
                            "saturation": 7
                        }, {
                            "lightness": 19
                        }, {
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "hue": "#ffffff"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 100
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "hue": "#ffffff"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 100
                        }, {
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                            "hue": "#bbc0c4"
                        }, {
                            "saturation": -93
                        }, {
                            "lightness": 31
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{
                            "hue": "#bbc0c4"
                        }, {
                            "saturation": -93
                        }, {
                            "lightness": 31
                        }, {
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels",
                        "stylers": [{
                            "hue": "#bbc0c4"
                        }, {
                            "saturation": -93
                        }, {
                            "lightness": -2
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "hue": "#e9ebed"
                        }, {
                            "saturation": -90
                        }, {
                            "lightness": -8
                        }, {
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "hue": "#e9ebed"
                        }, {
                            "saturation": 10
                        }, {
                            "lightness": 69
                        }, {
                            "visibility": "on"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                            "hue": "#e9ebed"
                        }, {
                            "saturation": -78
                        }, {
                            "lightness": 67
                        }, {
                            "visibility": "simplified"
                        }]
                    }];
                } else if (op.styles == 'yellow') {
                    var mapStyle = [{
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "color": "#444444"
                        }]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#f2f2f2"
                        }]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [{
                            "saturation": -100
                        }, {
                            "lightness": 45
                        }]
                    }, {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                            "color": "#fdeb06"
                        }, {
                            "visibility": "on"
                        }]
                    }];
                } else if (op.styles == 'red') {
                    var mapStyle = [{
                        "elementType": "geometry",
                        "stylers": [{
                            "visibility": "simplified"
                        }, {
                            "hue": "#ff0000"
                        }]
                    }, {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "transit.station",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "poi",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }, {
                        "featureType": "administrative",
                        "stylers": [{
                            "visibility": "simplified"
                        }]
                    }, {
                        "featureType": "water",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }];
                } else {
                    var mapStyle = '';
                }
                // GET MAIN MAP at Geocoder
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': op.Address
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var AddressLat = results[0].geometry.location.lat();
                        var AddressLng = results[0].geometry.location.lng();
                    } else {
                        var AddressLat = op.Lat;
                        var AddressLng = op.Lng;
                    }

                    // Get Center
                    var NewMarginLat = AddressLat - op.MarginLat;
                    var NewMarginLng = AddressLng - op.MarginLng;

                    // Options
                    var options = {
                        zoom: op.zoom,
                        center: op.center === 'true' ? new google.maps.LatLng(NewMarginLat, NewMarginLng) : new google.maps.LatLng(AddressLat, AddressLng),
                        scrollwheel: op.scrollwheel === 'true' ? true : false,
                        draggable: op.draggable === 'true' ? true : false,
                        disableDefaultUI: op.disableDefaultUI === 'false' ? false : true,
                        styles: mapStyle,
                        disableDoubleClickZoom: op.disableDoubleClickZoom === 'false' ? false : true,
                        fullscreenControl: op.fullscreenControl === 'false' ? false : true,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    var map = new google.maps.Map(me.get(0), options);
                    // Set position & Icon
                    var image = new google.maps.MarkerImage(op.imgMap);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(AddressLat, AddressLng),
                        map: map,
                        animation: google.maps.Animation.DROP,
                        icon: image,
                        title: op.Title
                    });

                    // Info Window
                    var infoWindow = new google.maps.InfoWindow({
                        content: op.infoWindow,
                        maxWidth: op.InfoWidth
                    });
                    if (op.infoWindow) {
                        google.maps.event.addListener(marker, 'click', function() {
                            infoWindow.open(map, marker);
                        });
                        infoWindow.open(map, marker);
                    }
                    // Add Open URL 
                    if (op.disableOpenURL === 'false') {
                        var centerControlDiv = document.createElement('div');
                        var centerControl = new CenterControl(centerControlDiv, map);
                        centerControlDiv.index = 1;
                        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(centerControlDiv);
                    }
                    // END 
                });

            });
        }
    });
}(jQuery));