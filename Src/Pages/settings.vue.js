const Settings = Vue.component('Settings', {
  data: function () {
    return {
  		title: "Rocket Launches - Settings",
			name: '',
			isDark: null,
			isMetric: null
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
		}
	},
	created(){
		document.title = this.title
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
	},
  template: `
	<div class="component settings">
		<h2>Settings</h2>
		<div class="theme-settings">
			<h2 class="settings-item-title">Dark mode &nbsp;</h2>
			<label class="settings switch">
				<input type="checkbox" :checked="isDark" @click="changeTheme()">
				<span class="slider round"></span>
			</label>
		</div>
		<div class="theme-settings">
			<h2 class="settings-item-title">Metric measures &nbsp;</h2>
			<label class="settings switch">
				<input type="checkbox" :checked="isMetric" @click="changeMeasures()">
				<span class="slider round"></span>
			</label>
		</div>
	</div>`
})