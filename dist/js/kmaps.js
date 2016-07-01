
 ////////////////////////////////////////////////////////
 //* Bao Nguyen Apps
 //* @version v1.0
 //* @link https://github.com/baonguyenyam
 //* @license MIT
 //* @Coding by Bao Nguyen
 ////////////////////////////////////////////////////////
 
'use strict';

;
(function ($) {
    $.fn.extend({
        kmaps: function kmaps(kmap) {

            var kmaps = kmap;

            var def = {
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

            return this.each(function (elm) {
                var me = $(this);

                var fc = {
                    zoom: me.find('.mapZoom').text(),
                    Lng: me.find('.Lng').text(),
                    Lat: me.find('.Lat').text(),
                    MarginLat: me.find('.MarginLat').text(),
                    MarginLng: me.find('.MarginLng').text(),
                    center: me.find('.mapCenter').text(),
                    scrollwheel: me.find('.scrollwheel').text(),
                    draggable: me.find('.draggable').text(),
                    disableDefaultUI: me.find('.disableDefaultUI').text(),
                    styles: me.find('.ms').text(),
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

                if (!kmaps) {
                    var op = {
                        zoom: fc.zoom ? parseInt(fc.zoom) : def.zoom,
                        Lng: fc.Lng ? fc.Lng : def.Lng,
                        Lat: fc.Lat ? fc.Lat : def.Lat,
                        MarginLat: fc.MarginLat ? fc.MarginLat : def.MarginLat,
                        MarginLng: fc.MarginLng ? fc.MarginLng : def.MarginLng,
                        center: fc.center ? fc.center : def.center,
                        scrollwheel: fc.scrollwheel ? fc.scrollwheel : def.scrollwheel,
                        draggable: fc.draggable ? fc.draggable : def.draggable,
                        disableDefaultUI: fc.disableDefaultUI ? fc.disableDefaultUI : def.disableDefaultUI,
                        styles: fc.styles ? fc.styles : def.styles,
                        imgMap: fc.imgMap ? fc.imgMap : def.imgMap,
                        mapTypeId: fc.mapTypeId ? fc.mapTypeId : def.mapType,
                        infoWindow: fc.infoWindow ? fc.infoWindow : def.infoWindow,
                        InfoWidth: fc.InfoWidth ? fc.InfoWidth : def.InfoWidth,
                        Title: fc.Title ? fc.Title : def.Title,
                        OpenURL: fc.OpenURL ? fc.OpenURL : def.OpenURL,
                        disableOpenURL: fc.disableOpenURL ? fc.disableOpenURL : def.disableOpenURL,
                        fullscreenControl: fc.fullscreenControl ? fc.fullscreenControl : def.fullscreenControl,
                        disableDoubleClickZoom: fc.disableDoubleClickZoom ? fc.disableDoubleClickZoom : def.disableDoubleClickZoom,
                        Address: fc.Address ? fc.Address : def.Address

                    };
                } else {
                    var op = {
                        zoom: kmap.zoom ? parseInt(kmap.zoom) : def.zoom,
                        Lng: kmap.Lng ? kmap.Lng : def.Lng,
                        Lat: kmap.Lat ? kmap.Lat : def.Lat,
                        MarginLat: kmap.MarginLat ? kmap.MarginLat : def.MarginLat,
                        MarginLng: kmap.MarginLng ? kmap.MarginLng : def.MarginLng,
                        center: kmap.center ? kmap.center : def.center,
                        scrollwheel: kmap.scrollwheel ? kmap.scrollwheel : def.scrollwheel,
                        draggable: kmap.draggable ? kmap.draggable : def.draggable,
                        disableDefaultUI: kmap.disableDefaultUI ? kmap.disableDefaultUI : def.disableDefaultUI,
                        styles: kmap.styles ? kmap.styles : def.styles,
                        imgMap: kmap.imgMap ? kmap.imgMap : def.imgMap,
                        mapTypeId: kmap.mapTypeId ? kmap.mapTypeId : def.mapType,
                        infoWindow: kmap.infoWindow ? kmap.infoWindow : def.infoWindow,
                        InfoWidth: kmap.InfoWidth ? kmap.InfoWidth : def.InfoWidth,
                        Title: kmap.Title ? kmap.Title : def.Title,
                        OpenURL: kmap.OpenURL ? kmap.OpenURL : def.OpenURL,
                        disableOpenURL: kmap.disableOpenURL ? kmap.disableOpenURL : def.disableOpenURL,
                        disableDoubleClickZoom: kmap.disableDoubleClickZoom ? kmap.disableDoubleClickZoom : def.disableDoubleClickZoom,
                        fullscreenControl: kmap.fullscreenControl ? kmap.fullscreenControl : def.fullscreenControl,
                        Address: kmap.Address ? kmap.Address : def.Address
                    };
                }

                function CenterControl(controlDiv, map) {
                    var url = 'https://www.google.com/maps/place/';
                    // Set CSS for the control border.
                    var ct = document.createElement('div');
                    ct.style.backgroundColor = '#fff';
                    ct.style.border = '2px solid #fff';
                    ct.style.borderRadius = '2px';
                    ct.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                    ct.style.cursor = 'pointer';
                    ct.style.marginBottom = '5px';
                    ct.style.marginTop = '10px';
                    ct.style.marginRight = '10px';
                    ct.style.textAlign = 'center';
                    ct.title = 'Click to view full map';
                    controlDiv.appendChild(ct);

                    // Set CSS for the control interior.
                    var cx = document.createElement('div');
                    cx.style.color = 'rgb(25,25,25)';
                    cx.style.fontFamily = 'Roboto,Arial,sans-serif';
                    cx.style.fontSize = '12px';
                    cx.style.lineHeight = '1.5rem';
                    cx.style.paddingLeft = '3px';
                    cx.style.paddingRight = '3px';
                    if (op.Address) {
                        cx.innerHTML = '<a target=_blank href="' + url + encodeURIComponent(op.Address.trim()).replace(/%20/g, "+") + '/@' + op.Lat + ',' + op.Lng + ',' + op.zoom + 'z">' + op.OpenURL + '</a>';
                    } else {
                        cx.innerHTML = '<a target=_blank href="' + url + '@' + op.Lat + ',' + op.Lng + ',' + op.zoom + 'z">' + op.OpenURL + '</a>';
                    }
                    ct.appendChild(cx);

                    ct.addEventListener('click', function () {});
                };

                // Styles
                if (op.styles == 'default') {
                    var ms = '';
                } else if (op.styles == 'white') {
                    var ms = [{
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
                    var ms = [{
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
                    var ms = [{
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
                    var ms = [{
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
                    var ms = [{
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
                    var ms = [{
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
                    var ms = [{
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
                    var ms = [{
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
                    var ms = '';
                }
                // GET MAIN MAP at Geocoder
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': op.Address
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var adLat = results[0].geometry.location.lat();
                        var adLng = results[0].geometry.location.lng();
                    } else {
                        var adLat = op.Lat;
                        var adLng = op.Lng;
                    }

                    // Get Center
                    var marL = adLat - op.MarginLat;
                    var marG = adLng - op.MarginLng;

                    // Options
                    var options = {
                        zoom: op.zoom,
                        center: op.center === 'true' ? new google.maps.LatLng(marL, marG) : new google.maps.LatLng(adLat, adLng),
                        scrollwheel: op.scrollwheel === 'true' ? true : false,
                        draggable: op.draggable === 'true' ? true : false,
                        disableDefaultUI: op.disableDefaultUI === 'false' ? false : true,
                        styles: ms,
                        disableDoubleClickZoom: op.disableDoubleClickZoom === 'false' ? false : true,
                        fullscreenControl: op.fullscreenControl === 'true' ? true : false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };

                    var map = new google.maps.Map(me.get(0), options);
                    // Set position & Icon
                    var image = new google.maps.MarkerImage(op.imgMap);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(adLat, adLng),
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
                        google.maps.event.addListener(marker, 'click', function () {
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
})(jQuery);
//# sourceMappingURL=kmaps.js.map
