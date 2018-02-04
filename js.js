let vm1= new Vue({
	el: '#head',
	data: {
		myAweTitle: 'This is Awe-some!!',
	},
});

let vm = new Vue({
	el: '#app',
	data: {
		msg: 'THE HEAD CAN BE A VUE INSTANCE!',
	},
	watch: {
		msg: function(n,o){
			console.log('yup, that happens before the return ... impressive');
		},
	},
	methods: {
		reverse: function(msg){
			return msg.split('').reverse().join('');
		},
	},
	computed: {
		reversedMsg: function(){
			return this.msg.split('').reverse().join('');
		},
	},
});
