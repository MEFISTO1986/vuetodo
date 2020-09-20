<template>
<li v-bind:class="{ completed : todo.completed }">
  <div class="form-check">
    <label class="form-check-label"> 
      <input class="checkbox" type="checkbox" v-model="todo.completed"> {{ todo.name }} <i class="input-helper"></i>
    </label> 
  </div>
  <i class="remove mdi mdi-close-circle-outline" v-on:click="removeTodo"></i>
</li>
</template>

<script src="./TodosItem.js"></script>