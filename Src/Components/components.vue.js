// var mobileType = getMobileOperatingSystem()
// if( mobileType == "Android" ){
// 	this.icon = 'logo-google-playstore'
// }else if( mobileType == "iOS" ){
// 	this.icon = 'logo-apple-appstore'
// }else{
// 	this.icon = 'storefront-outline'
// }

// <button class="add-button">
// 	<ion-icon class="button-icon" :name="icon"></ion-icon>
// 	Add app
// </button>
Vue.component('app-loading-modal', {
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
	
	`
})