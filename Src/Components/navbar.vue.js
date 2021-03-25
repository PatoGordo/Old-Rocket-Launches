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
	<nav class="navbar bottom-0 fixed w-full h-20 flex flex-row flex-nowrap items-center justify-evenly sm:top-0 sm:py-10 sm:relative">
		<router-link to="/" class="navbar-logo hidden sm:block text-nav-button text-xl px-1.5 whitespace-nowrap">Space Launches</router-link>
		<router-link to="/" class="navbar-item text-2xl text-nav-button p-2.5 transition-all duration-300 hover:transition-all duration-300 text-hover":class="currentRouteName == 'home' ? 'active' : ''"><ion-icon name="rocket-outline"></ion-icon><p class="text-xs">Home</p></router-link>
		<router-link to="/news" class="navbar-item text-2xl text-nav-button p-2.5 transition-all duration-300 hover:transition-all duration-300 text-hover":class="currentRouteName == 'news' ? 'active' : ''"><ion-icon name="newspaper-outline"></ion-icon><p class="text-xs">News</p></router-link>
		<router-link to="/launches" class="navbar-item text-2xl text-nav-button p-2.5 transition-all duration-300 hover:transition-all duration-300 text-hover":class="currentRouteName == 'launches' ? 'active' : ''"><ion-icon name="list-outline"></ion-icon><p class="text-xs">Next five</p></router-link>
		<router-link to="/settings" class="navbar-item text-2xl text-nav-button p-2.5 transition-all duration-300 hover:transition-all duration-300 text-hover":class="currentRouteName == 'settings' ? 'active' : ''"><ion-icon name="cog-outline"></ion-icon><p class="text-xs">Settings</p></router-link>
	</nav>
	`
})