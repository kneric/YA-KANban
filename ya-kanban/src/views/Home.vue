<template>
  <div class="home">
    <NewTask></NewTask>
  </div>
</template>

<script>
// @ is an alias to /src
import NewTask from '@/components/NewTask.vue'

export default {
  name: 'home',
  components: {
    NewTask
  }
}
</script>
