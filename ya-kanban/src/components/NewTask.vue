<template>
  <div class="add-task">
    <div class="row">
      <div class="col-md-12">
        <h1>YA-KANban</h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#taskModal">
          New Task
        </button>
      </div>
    </div>
    <div class="modal fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="taskModalLabel">Add New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-group">
                <label for="exampleFormControlInput1">Task Name</label>
                <input type="text" v-model="newTask.name" name="name" class="form-control" aria-required="true" required>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Priority</label>
                <input type="number" class="form-control" min="1" max="5" v-model.number="newTask.priority" required>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Short Description</label>
                <textarea class="form-control" rows="3" v-model="newTask.desc" required></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">cancel</button>
            <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="addTask">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'newtask',
    data () {
      return {
        newTask: {
          name: null,
          priority: 1,
          desc: '',
          status: 1
        }
      }
    },
    methods: {
      addTask () {
        this.$emit('addTask', this.newTask);
         
        this.newTask.name = '';
        this.newTask.priority = 1;
        this.newTask.desc = '';

      }
    }
  }
</script>