let vm = new Vue({
	el: '#app',
	data: {
		msg: 'wtf',
	},
	watch: {
		msg: function(n,o){
			console.log('yup, that happens before the return ... impressive');
		},
	},
});
