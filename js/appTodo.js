const todoApp = {
	data() {
		return {
			placeholderString: 'Введите новое дело',
			title: 'Список дел',
			inputValue: '',
			notes: ['Купить стол', 'Продать стул']
		}
	},
	methods: {
		addNewNote() {
			if(this.inputValue !== ''){
			this.notes.push(this.inputValue)
			this.inputValue = ''
			}
		},
		removeNote(id) {
			this.notes.splice(id,1)
		}
	}
}

Vue.createApp(todoApp).mount('#todoApp')