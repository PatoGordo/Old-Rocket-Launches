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
		<h2 class="text-2xl">Next five launches</h2>
		<div class="container w-full grid grid-cols-1 items-stretch justify-center content-center justify-items-center sm:grid-cols-2">
			<div class="card min-w-95-420 m-2.5 p-3.5 flex flex-col items-center justify-center text-start" v-for="next in nextLaunch">
				<h2 class="card-title mb-1 text-left text-2xl self-start"><strong>{{next.name}}</strong></h2>
				<p class="card-date font-light text-left self-start text-smaller">{{Utils.unixConverter(next.sort_date)}}</p>
				<p class="card-description mt-5 text-left">{{next.launch_description}}</p>
				<p class="card-others first text-left self-start mt-1 mt-2.5 w-full"><strong>Vehicle:</strong> {{next.vehicle.name}}</p>
				<p class="card-others first text-left self-start mt-1"><strong>Local:</strong> {{next.pad.location.name}}, {{next.pad.location.country}}</p>
				<p class="card-others first text-left self-start mt-1"><strong>Weather</strong> <br>Condition: {{next.weather_condition != null ? next.weather_condition : 'null' }}, <br>Temperature: {{isMetric ? Utils.toMetricTemp(next.weather_temp) + '°C' : next.weather_temp + '°F'}}, <br>Wind: {{isMetric ? Utils.toMetricSpeed(next.weather_wind_mph) + 'Km/h' : next.weather_wind_mph + 'Mph'}}.</p>
			</div>
		</div>
		<footer style="margin-bottom: 20px;">Data by: <a href="https://www.rocketlaunch.live/">https://www.rocketlaunch.live/</a></footer>
	</div>`
})