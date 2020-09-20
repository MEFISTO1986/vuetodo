export default {
	props: ["todo"],
	methods: {
		removeTodo: function(index) {
			this.$emit('remove-todo')
		}
	}
}