<template>
	<div class="list-wrapper">
      <ul class="d-flex flex-column-reverse todo-list">
        <todos-item v-on:remove-todo="removeTodo(index)" v-for="(todo , index) in todos" v-bind:key="todo.id" v-bind:todo="todo"></todos-item>
      </ul>
    </div>
</template>

<script src="./TodosList.js"></script>