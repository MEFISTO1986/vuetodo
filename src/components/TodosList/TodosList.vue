<template>
	<div>
		<div class="add-items d-flex">
	      <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?">
	      <button class="add btn btn-primary font-weight-bold todo-list-add-btn" v-on:click="addTodo">Add</button>
	    </div>
		<div class="list-wrapper">
	      <ul class="d-flex flex-column-reverse todo-list">
	        <todos-item v-on:remove-todo="removeTodo(index)" v-for="(todo , index) in todos" v-bind:key="todo.id" v-bind:todo="todo"></todos-item>
	      </ul>
	    </div>
	</div>
</template>

<script src="./TodosList.js"></script>