;
(function($) {
    $.fn.extend({
        kmaps: function(maps_options) {
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
                    Title: me.find('.Title').text(),
                    Address: me.find('address').text()
                };
                console.log(checkClass);

                var op = {
                    zoom: checkClass.zoom ? parseInt(checkClass.zoom) : parseInt(maps_options.zoom) ? parseInt(maps_options.zoom) : 15,
                    Lng: checkClass.Lng ? checkClass.Lng : maps_options.Lng ? maps_options.Lng : 0,
                    Lat: checkClass.Lat ? checkClass.Lat : maps_options.Lat ? maps_options.Lat : 0,
                    MarginLat: checkClass.MarginLat ? checkClass.MarginLat : maps_options.MarginLat ? maps_options.MarginLat : 0,
                    MarginLng: checkClass.MarginLng ? checkClass.MarginLng : maps_options.MarginLng ? maps_options.MarginLng : 0,
                    center: checkClass.center ? checkClass.center : maps_options.center ? true : false,
                    scrollwheel: checkClass.scrollwheel ? checkClass.scrollwheel : maps_options.scrollwheel ? true : false,
                    draggable: checkClass.draggable ? checkClass.draggable : maps_options.draggable ? true : false,
                    disableDefaultUI: checkClass.disableDefaultUI ? checkClass.disableDefaultUI : maps_options.disableDefaultUI ? true : false,
                    styles: checkClass.styles ? checkClass.styles : maps_options.Styles ? maps_options.Styles : 'default',
                    imgMap: checkClass.imgMap ? checkClass.imgMap : maps_options.imgMap ? maps_options.imgMap : '',
                    mapTypeId: checkClass.mapTypeId ? checkClass.mapTypeId : maps_options.mapType ? maps_options.mapType : 'ROADMAP',
                    infoWindow: checkClass.infoWindow ? checkClass.infoWindow : maps_options.infoWindow ? maps_options.infoWindow : null,
                    InfoWidth: checkClass.InfoWidth ? checkClass.InfoWidth : maps_options.InfoWidth ? maps_options.InfoWidth : '',
                    Title: checkClass.Title ? checkClass.Title : maps_options.Title ? maps_options.Title : '',
                    Address: checkClass.Address ? checkClass.Address : maps_options.Address ? maps_options.Address : ''
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
                        center: op.center ? new google.maps.LatLng(NewMarginLat, NewMarginLng) : new google.maps.LatLng(AddressLat, AddressLng),
                        scrollwheel: op.scrollwheel,
                        draggable: op.draggable,
                        disableDefaultUI: op.disableDefaultUI,
                        styles: mapStyle,
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
                    // END 
                });

            });
        }
    });
}(jQuery));