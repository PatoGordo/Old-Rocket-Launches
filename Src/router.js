const routes = [
	//set your routes here
  { path: '/', component: Home, name: 'home' },
  { path: '/news', component: News, name: 'news' },
  { path: '/launches', component: Launches, name: 'launches' },
  { path: '/settings', component: Settings, name: 'settings' },

	
  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})
