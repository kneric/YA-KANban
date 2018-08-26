<template>
  <div class="add-task d-flex">
    <div class="p-2">YA-KANban</div>
    <button type="button" class="btn btn-primary offset-md-9" data-toggle="modal" data-target="#taskModal">
      New Task
    </button>
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
            <div class="form-group">
              <label for="exampleFormControlInput1">Task Name</label>
              <input type="text" class="form-control" v-model="newTask.name">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Priority</label>
              <input type="number" class="form-control" min="1" max="5" v-model="newTask.priority">
            </div>
             <div class="form-group">
              <label for="exampleFormControlTextarea1">Short Description</label>
              <textarea class="form-control" rows="3" v-model="newTask.desc"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">cancel</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask">Add</button>
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
          name: '',
          priority: 0,
          desc: '',
          status: 0
        }
      }
    },
    methods: {
      addTask () {
        this.$emit('addTask', this.newTask);
         
        this.newTask.name = '';
        this.newTask.priority = 0;
        this.newTask.desc = '';
      }
    }
  }
</script>