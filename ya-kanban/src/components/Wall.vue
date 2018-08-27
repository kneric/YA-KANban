<template>
  <div :class="cardClass">
    <div class="card-header">
      <strong>{{ category }}</strong>
    </div>
    <div class="card-body">
      <Notes v-for="(task, index) in tasks" @deleteTask="$emit('deleteTask', task)" @moveLeft="$emit('moveLeft', task)" @moveRight="$emit('moveRight', task)" :task="task" :key="index" />
    </div>
  </div>
</template>

<script>
   import Notes from '@/components/Notes'
   export default {
    props: ['category', 'tasks'],
    components: {
      Notes
    },
    computed: {
      cardClass: function () {
        switch (this.category) {
          case 'Backlog': return 'card bg-danger'
          case 'Todo': return 'card bg-warning'
          case 'Doing': return 'card bg-primary'
          case 'Done': return 'card bg-success'
        }
      }
    },
    methods: {
    }
  }
</script>