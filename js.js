let vm1= new Vue({
	el: 'head',
	data: {
		myAweTitle: 'This is Awe-some!!',
	},
});

let vm = new Vue({
	el: '#app',
	data: {
		list: [
		{ id: 0, display: 'wtf0',},
		{ id: 1, display: 'wtf1',},
		{ id: 2, display: 'wtf2',},
		{ id: 3, display: 'wtf3',},
		{ id: 4, display: 'wtf4',},
		],
	},
	methods: {
		swap: function(){
			let x = this.list[0];
			this.list.shift();
			this.list.push(x);
		},
	},
});
