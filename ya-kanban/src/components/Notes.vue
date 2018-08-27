<template>
  <div class="card mb-2 text-dark">
    <div class="card-header">
      {{ task.name }}
    </div>
    <div class="card-body">
      Priority: {{ task.priority }} 
      <br>
      Short Description: {{ task.desc }}
    </div>
    <div class="card-footer d-flex justify-content-around">
      <button class="btn btn-danger" @click="$emit('deleteTask', task)">Delete</button>
      <button v-if="task.status > 1" class="btn btn-warning" @click="$emit('moveLeft', task)"><font-awesome-icon icon="angle-left" /></button>
      <button v-if="task.status < 4" class="btn btn-primary" @click="$emit('moveRight', task)"><font-awesome-icon icon="angle-right" /></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    methods: {
    }
  }
</script>

