# K-GMAPS

![K-GMAPS](https://raw.githubusercontent.com/baonguyenyam/k-gmaps/master/src/images/2016-07-01_060717.png "K-GMAPS")

* K-GMAPS v1.0.8
* K-GMAPS is just a library of Google map.
* K-GMAPS requires jQuery. If your OS is older, this version may not render.
* http://baonguyenyam.github.io
* Copyright 2016 by Bao Nguyen.
* MIT License

# Features

* EASY to SEO by HTML tag gennerate 
* Multi Style
* Toggle Fullscreen button
* Open URL button 
* Margin pin icon
* Customize control bar 
* Disable/Enable drag & drop
* Disable/Enable Zoom
* Disable/Enable click to zoom
* Disable/Enable map focus in Mobile view 
* Customize infoWindow
* Customize pin icon
* Auto open infoWindow
* ...

===============================
#Install

***Via Bower:***
```
bower install --save k-gmaps
```

***Via NPM:***
```
npm install --save-dev k-gmaps
```
___

#Include 

##### Include jQuery

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
```

##### Include Google Map

```html
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>
```

#Ini map

```js
<script src="js/kmaps.js"></script>
<script>
	$(document).ready(function() {
	  $('#gmap_canvas').kmaps();
	});
</script>
```

##### Via HTML

```html
<div id="gmap_canvas" class="gmap">
  <div class="Lat">10.359352</div>
  <div class="Lng">106.673089</div>
  <div class="MarginLat">-0.0050</div>
  <div class="MarginLng">0</div>
  <div class="imgMap">images/logo_map.png</div>
    <address>211A Ngô Tùng Châu, Gò Công, Tiền Giang, Việt Nam</address>
  <div class="infoWindow">
    <h3>Bảo Nguyên</h3>
    <p><strong>Tại Tiền Giang :</strong><br> 211A Ngô Tùng Châu, KP.3, P.1, Gò Công<br> Email: info@baonguyenyam.com<br> Tel : <a href="tel:+840000000" onclick="_gaq.push(['_trackEvent', 'Mobile', 'Click to Call'])">0908.000.000</a></p>
  </div>
  <div class="mapType">ROADMAP</div>
  <div class="mapCenter">true</div>
  <div class="Title">Hello</div>
  <div class="infoWidth">200</div>
  <div class="mapStyle">black</div>
  <div class="mapZoom">15</div>
  <div class="scrollwheel">true</div>
  <div class="disableDoubleClickZoom">true</div>
  <div class="fullscreenControl">true</div>
  <div class="disableOpenURL">false</div>
  <div class="OpenURL">View full map</div>
  <div class="draggable">true</div>
  <div class="disableDefaultUI">false</div>
</div>
```

##### Via JS

```js
$(document).ready(function() {
  $('.gmap_canvas').kmaps({
    zoom: 15,
    Address: '211A Ngô Tùng Châu, Gò Công, Tiền Giang, Việt Nam',
    Lat: '10.359352',
    Lng: '106.673089',
    MarginLat: '-0.0050',
    MarginLng: '0',
    center: true,
    scrollwheel: false,
    draggable: true,
    disableDefaultUI: true,
    styles: 'red', // white, black, river, green, cyan, yellow
    imgMap: 'images/logo_map.png',
    mapType: 'ROADMAP', // SATELLITE, HYBRID, TERRAIN,
    Title: 'Hello',
    infoWindow: '<b>Hello</b>',
    InfoWidth: '200',
    disableOpenURL: true,
    fullscreenControl: false,
    disableDoubleClickZoom: false,
    OpenURL: 'View full map'
  });
});
```

#Wiki docs

https://github.com/baonguyenyam/k-gmaps/wiki


## Licence

Copyright &copy; 2016 Bao Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Bảo Nguyên
