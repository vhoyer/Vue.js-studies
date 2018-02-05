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
			setInterval(()=>{this.nowD=Date.now();},1000);
			import('./other.js')
				.then(x => this.nowDK = x.func1());
			return "whatever"
		},
	},
});
