const News = Vue.component('News', {
  data: function () {
    return {
  		title: "Rocket Launches - News",
			firstArticle: []
    }
  },
	methods:{

	},
	created(){
		document.querySelector('#modal').style.display = 'flex'
		axios.get('https://rocket-launches-api.vercel.app/api/news')
		.then(res => {
			this.firstArticle = res.data
			document.querySelector('#modal').style.display = 'none'
		})
		document.title = this.title
	},
  template: `
	<div class="component news">
		<h2 class="text-2xl">Astronomy news</h2>
		<div class="container w-full grid grid-cols-1 items-stretch justify-center content-center justify-items-center sm:grid-cols-2">
			<div class="card min-w-95-420 m-2.5 p-3.5 flex flex-col items-center justify-center text-start" v-for="article in firstArticle">
				<h2 class="card-title mb-1 text-left text-2xl self-start"><strong>{{article.title}}</strong></h2>
				<p class="card-date font-light text-left self-start text-smaller">{{Utils.iSOtoUTC(article.publishedAt)}}</p>
				<p class="card-description mt-5 text-left">{{article.summary}}</p>
				<p class="text-left self-start mt-1 mt-2.5 w-full"><a class="text-left self-start text-see-more" :href="article.url"><strong>See more in {{article.newsSite}}</a></strong></p>
			</div>
		</div>
		<footer style="margin-bottom: 20px;">News by: <a href="https://www.spaceflightnewsapi.net">https://www.spaceflightnewsapi.net</a></footer>
	</div>`
})