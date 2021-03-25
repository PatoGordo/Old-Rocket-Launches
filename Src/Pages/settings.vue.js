const Settings = Vue.component('Settings', {
  data: function () {
    return {
  		title: "Rocket Launches - Settings",
			name: '',
			isDark: null,
			isMetric: null,
			addbutton: 'display: flex',
			deferredPrompt: null
    }
  },
	methods:{
		changeTheme(){
			if(localStorage.getItem('theme') == 'dark'){
				localStorage.setItem('theme', 'default')
				document.body.classList.toggle('dark')
				this.isDark = false
			}else{
				localStorage.setItem('theme', 'dark')
				document.body.classList.toggle('dark')
				this.isDark = true
			}
		},
		changeMeasures(){
			if(localStorage.getItem('measures') == 'metric'){
				localStorage.setItem('measures', 'imperial')
				this.isMetric = false
			}else{
				localStorage.setItem('measures', 'metric')
				this.isMetric = true
			}
		},
		// addPwa(){
		// 	this.addbutton = 'display: none'
		// 	// Show the prompt
		// 	this.deferredPrompt.prompt();
		// 	// Wait for the user to respond to the prompt
		// 	this.deferredPrompt.userChoice.then((choiceResult) => {
		// 		if (choiceResult.outcome === 'accepted') {
		// 			alert('The instalation started now.')
		// 		} else {
		// 			this.addbutton = 'display: flex'
		// 		}
		// 		this.deferredPrompt = null;
		// 	});
		// }
	},
	created(){
		document.title = this.title
    document.querySelector('#modal').style.display = 'none'
		if(localStorage.getItem('theme') == 'dark'){
			this.isDark = true
		}else{
			this.isDark = false
		}
		if(localStorage.getItem('measures') == 'metric'){
			this.isMetric = true
		}else{
			this.isMetric = false
		}

		// this.addbutton = 'display: none'

		// window.addEventListener('beforeinstallprompt', (e) => {
		// 	// Prevent Chrome 67 and earlier from automatically showing the prompt
		// 	e.preventDefault();
		// 	// Stash the event so it can be triggered later.
		// 	this.deferredPrompt = e;
		// 	// Update UI to notify the user they can add to home screen
		// 	this.addbutton = 'display: flex'
		// });
	},
  template: `
	<div class="component settings">
		<h1 class="text-3xl">Settings</h1>
		<h2 class="text-2xl">Theme</h2>
		<div class="theme-settings whitespace-nowrap p-3.5 mx-2.5 my-5 rounded-lg flex flex-row items-center justify-center flex-nowrap settings-border">
			<h2 class="settings-item-title">Light &nbsp;</h2>
			<label class="settings switch">
				<input type="checkbox" :checked="isDark" @click="changeTheme()">
				<span class="slider round"></span>
			</label>
			<h2 class="settings-item-title">&nbsp; Dark</h2>
		</div>
		<h2 class="text-2xl">Measures</h2>
		<div class="measures-settings whitespace-nowrap p-3.5 mx-2.5 my-5 rounded-lg flex flex-row items-center justify-center flex-nowrap settings-border">
			<h2 class="settings-item-title">Imperial &nbsp;</h2>
			<label class="settings switch">
				<input type="checkbox" :checked="isMetric" @click="changeMeasures()">
				<span class="slider round"></span>
			</label>
			<h2 class="settings-item-title">&nbsp; Metric</h2>
		</div>

		<!--button class="install-button" :style="addbutton" @click="addPwa()">
			<ion-icon name="cloud-download-outline" class="icon-button"></ion-icon>
			Install App
		</button-->

		<footer class="settings-sources bottom-0 mt-auto mb-2.5">
			<h2 class="text-2xl">Sources</h2>
			<a href="https://github.com/PatoGordo/Rocket-Launches" target="_blank" rel="noopener">Website/PWA Code</a><br>
			<a href="https://github.com/PatoGordo/Rocket-Launches-API" target="_blank" rel="noopener">Api Code</a>&nbsp;&nbsp;|&nbsp;
			<a href="https://api.rocketlaunches.ga/" target="_blank" rel="noopener">Api Link</a>
		</footer>
	</div>`
})