Vue.component('app-navbar', {
  data: function () {
    return {

    }		
  },
	methods:{
		
	},
	computed: {
    currentRouteName() {
			return this.$route.name;
    }
	},
  template: `
	<p class="navbar">
		<router-link to="/" class="navbar-logo">Space Launches</router-link>
		<router-link to="/" class="navbar-item":class="currentRouteName == 'home' ? 'active' : ''"><ion-icon name="rocket-outline"></ion-icon></router-link>
		<router-link to="/news" class="navbar-item":class="currentRouteName == 'news' ? 'active' : ''"><ion-icon name="newspaper-outline"></ion-icon></router-link>
		<router-link to="/launches" class="navbar-item":class="currentRouteName == 'launches' ? 'active' : ''"><ion-icon name="list-outline"></ion-icon></router-link>
		<router-link to="/settings" class="navbar-item":class="currentRouteName == 'settings' ? 'active' : ''"><ion-icon name="cog-outline"></ion-icon></router-link>
	</p>
	`
})