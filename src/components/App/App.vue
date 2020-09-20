<template>
<div class="page-content page-container" id="page-content">
  <div class="padding">
    <div class="row container d-flex justify-content-center">
      <div class="col-lg-12">
        <div class="card px-3">
          <div class="card-body">
            <h4 class="card-title">Awesome Todo list</h4>
            <div class="add-items d-flex">
              <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?">
              <button class="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button>
            </div>
            <todos-list></todos-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script src="./App.js"></script>