if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js');
}
function getMobileOperatingSystem() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
		return 'iOS';
	}else if(userAgent.match( /Android/i )){
		return 'Android';
	}else{
		return 'unknown';
	}
}

if(localStorage.getItem('theme') == null){
	localStorage.setItem('theme', 'dark')
}else{
	localStorage.getItem('theme', 'default')
}
function getTheme(){
	return localStorage.getItem('theme')
}

if(localStorage.getItem('measures') == null){
	localStorage.setItem('measures', 'metric')
}else{
	localStorage.getItem('measures', 'imperial')
}
function getMeasures(){
	return localStorage.getItem('measures')
}

const Utils = {
	unixConverter(unix){
		var date = new Date(unix * 1000);

		var formattedTime = date.toLocaleString()
		return formattedTime
	},
	tMinus(start, end){
		var hourDiff = parseInt(start.split(':')[0],10) - parseInt(end.split(':')[0],10);

		return hourDiff
	},
	iSOtoUTC(iso){
		var formattedTime = new Date(iso)
		return formattedTime.toLocaleString()
	},
	toMetricTemp(fahrenheit){
		if(fahrenheit == null){
			return null
		}else{
			var celsius = (fahrenheit - 32) * 5 / 9
			return celsius.toFixed(0)
		}
	},
	toMetricSpeed(mph){
		if(mph == null){
			return null
		}else{
			var kmh = mph * 1.609344
			return kmh.toFixed(2)
		}
	}
}