let vm1= new Vue({
	el: 'head',
	data: {
		myAweTitle: 'This is Awe-some!!',
	},
});

let vm = new Vue({
	el: '#app',
	data: {
		nowD: Date.now(),
		nowDK: Date.now(),
	},
	computed: {
		nowC: function(){
			setInterval(()=>{this.nowD=Date.now();this.nowDK=Date.now()},1000);
			return Date.now();
		},
	},
});
