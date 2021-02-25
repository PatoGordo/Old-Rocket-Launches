const Launches = Vue.component('Launches', {
  data: function () {
    return {
  		title: "Rocket Launches - Launches",
			nextLaunch: [],
			isMetric: null
    }
  },
	methods:{

	},
	created(){
		document.querySelector('#modal').style.display = 'flex'
		axios.get('https://rocket-launches-api.vercel.app/api/launches')
		.then(res => {
			this.nextLaunch = res.data.result
			document.querySelector('#modal').style.display = 'none'
		})

		if(localStorage.getItem('measures') == 'metric'){
			this.isMetric = true
		}else{
			this.isMetric = false
		}
		
		document.title = this.title
	},
  template: `
	<div class="component launches">
		<h2>Next five launches</h2>
		<div class="container">
			<div class="card" v-for="next in nextLaunch">
				<h2 class="card-title"><strong>{{next.name}}</strong></h2>
				<p class="card-date">{{Utils.unixConverter(next.sort_date)}}</p>
				<p class="card-description">{{next.launch_description}}</p>
				<p class="card-others first"><strong>Vehicle:</strong> {{next.vehicle.name}}</p>
				<p class="card-others"><strong>Local:</strong> {{next.pad.location.name}}, {{next.pad.location.country}}</p>
				<p class="card-others"><strong>Weather</strong> <br>Condition: {{next.weather_condition}}, <br>Temperature: {{isMetric ? Utils.toMetricTemp(next.weather_temp) + '°C' : next.weather_temp + '°F'}}, <br>Wind: {{isMetric ? Utils.toMetricSpeed(next.weather_wind_mph) + 'Km/h' : next.weather_wind_mph + 'Mph'}}.</p>
			</div>
		</div>
		<footer style="margin-bottom: 20px;">Data by: <a href="https://www.rocketlaunch.live/">https://www.rocketlaunch.live/</a></footer>
	</div>`
})