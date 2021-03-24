const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: "Rocket Launches - Home",
			nextLaunch: [],
			firstArticle: [],
			errorMessage: '',
			errorMessageVisibility: false,
			localeNow: 0,
			isMetric: null
    }
  },
	methods:{
		
	},
	created(){
		document.querySelector('#modal').style.display = 'flex'
		axios.get('https://rocket-launches-api.vercel.app/api/launches')
		.then(res => {
			this.nextLaunch = res.data.result.slice(0,1)
			axios.get('https://rocket-launches-api.vercel.app/api/news')
			.then(res => {
				this.firstArticle = res.data.slice(0,1)
				document.querySelector('#modal').style.display = 'none'
			})
		})
		
		if(localStorage.getItem('measures') == 'metric'){
			this.isMetric = true
		}else{
			this.isMetric = false
		}
		
		document.title = this.title
	},
  template: `
	<div class="component home">
		<div class="container leading-initial flex flex-col items-center justify-center">
			<h2 class="text-2xl">Next Launch</h2>
			<div class="card min-w-95-420 m-2.5 p-3.5 flex flex-col items-center justify-center text-start" v-for="next in nextLaunch">
				<h2 class="card-title mb-1 text-left text-2xl self-start"><strong>{{next.name}}</strong></h2>
				<p class="card-date font-light text-left self-start text-smaller">{{Utils.unixConverter(next.sort_date)}}</p>
				<p class="card-description mt-5 text-left">{{next.launch_description}}</p>
				<p class="card-others first text-left self-start mt-1 mt-2.5 w-full"><strong>Vehicle:</strong> {{next.vehicle.name}}</p>
				<p class="card-others first text-left self-start mt-1"><strong>Local:</strong> {{next.pad.location.name}}, {{next.pad.location.country}}</p>
				<p class="card-others first text-left self-start mt-1"><strong>Weather</strong> <br>Condition: {{next.weather_condition != null ? next.weather_condition : 'null' }}, <br>Temperature: {{isMetric ? Utils.toMetricTemp(next.weather_temp) + '°C' : next.weather_temp + '°F'}}, <br>Wind: {{isMetric ? Utils.toMetricSpeed(next.weather_wind_mph) + 'Km/h' : next.weather_wind_mph + 'Mph'}}.</p>
			</div>
			<h2 class="text-2xl leading-8">Breaking News</h2>
			<div class="card min-w-95-420 m-2.5 p-3.5 flex flex-col items-center justify-center text-start" v-for="article in firstArticle">
				<h2 class="card-title mb-1 text-left text-2xl self-start"><strong>{{article.title}}</strong></h2>
				<p class="card-date font-light text-left self-start text-smaller">{{Utils.iSOtoUTC(article.publishedAt)}}</p>
				<p class="card-description mt-5 text-left">{{article.summary}}</p>
				<p class="text-left self-start mt-1 mt-2.5 w-full"><a class="text-left self-start text-see-more" :href="article.url"><strong>See more in {{article.newsSite}}</a></strong></p>
			</div>
		</div>
	</div>`
})