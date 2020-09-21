import TodosItem from "../TodosItem/TodosItem.vue"

export default {
	data: function() {
		return {
			todos: [
				{
					id: 1,
					name: "For what reason would it be advisable.",
					completed: true
				},
				{
					id: 2,
					name: "For what reason would it be advisable for me to think.",
					completed: false
				},
				{
					id: 3,
					name: "it be advisable for me to think about business content?",
					completed: true
				},
				{
					id: 4,
					name: "Print Statements all",
					completed: false
				},
				{
					id: 5,
					name: "Call Rampbo",
					completed: false
				}
			]
		}
	},
	methods: {
		removeTodo: function(index) {
			this.$delete(this.todos, index)
		},

		addTodo: function(todo) {
			this.todos.push({
				id: this.todos.length + 1,
				name: document.querySelector(".todo-list-input").value,
				completed: false
			})
		}
	},
	components: {
		TodosItem
	}
}