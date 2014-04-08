function init() {
	updateWidth();

	var gmap = document.getElementById('gmap');
	var myLatLng = new google.maps.LatLng(51.537558,-0.048982);
    var mapOptions = {
      center: myLatLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(gmap, mapOptions);

	var marker = new google.maps.Marker({
	  position: myLatLng,
	  map: map,
	  title: 'This is me!'
	});
	marker.setMap(map);
}

function updateWidth() {
	var articles = document.getElementsByTagName('article');
	var articlesWidth = (articles[0].offsetWidth+20)*articles.length;
	var width = header.offsetWidth+20+articlesWidth+1;
	document.getElementsByTagName('body')[0].style.width = width+'px';
	//document.getElementById('content').style.width = width+'px';
}

function scrollTo(x) {
	window.scroll(x,0);
}

google.maps.event.addDomListener(window, 'load', init);
window.onresize = updateWidth;