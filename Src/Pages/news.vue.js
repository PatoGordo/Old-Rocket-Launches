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
		axios.get('https://www.spaceflightnewsapi.net/api/v2/articles?_limit=5')
		.then(res => {
			this.firstArticle = res.data
			document.querySelector('#modal').style.display = 'none'
		})
		document.title = this.title
	},
  template: `
	<div class="component home">
		<h2>Space News</h2>
		<div class="card" v-for="article in firstArticle">
			<h2 class="card-title">{{article.title}}</h2>
			<p class="card-date">{{Utils.iSOtoUTC(article.publishedAt)}}</p>
			<p class="card-description">{{article.summary}}</p>
			<p class="card-others first"><a :href="article.url">See more in {{article.newsSite}}</a></p>
		</div>
		<footer style="margin-bottom: 20px;">News by: <a href="https://www.spaceflightnewsapi.net">https://www.spaceflightnewsapi.net</a></footer>
	</div>`
})