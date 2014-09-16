$(document).ready(function(){
	$('#search').click(function() {
		var keyword = $('#searchKeyword').val();
		
		if (keyword === ''){
			alert('검색어를 입력해 주세요.');
			return;
		}
		window.location.href = "./view/search_list.html?keyword=" + keyword;
	});
	
	$('#nextPage').click(function() {
		window.location.href = "./view/search_information.html";
	});
	
	$('#category_page').click(function() {
		window.location.href = "../view/change_category.html";
	});
	$('#change_mainPage').click(function() {
		window.location.href = "../index.html";
	});
	$('#option_page').click(function() {
		window.location.href = "./view/option.html";
	});
	var map;
	function initialize() {
	  var mapOptions = {
	    zoom: 8,
	    center: new google.maps.LatLng(-34.397, 150.644)
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
});
