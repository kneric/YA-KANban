<template>
  <div class="home">
    <div class="row">
      <NewTask @addTask="addTask"></NewTask>
    </div>
    <div class="row">
      <p></p>
      <br>
    </div>
    <div class="row text-light">
      <div class="col-md-3">
      <Wall category="Backlog" @deleteTask="deleteTask" @moveRight="moveRight" :tasks="backlogs" />
      </div>
      <div class="col-md-3">
      <Wall category="Todo" @deleteTask="deleteTask" @moveLeft="moveLeft" @moveRight="moveRight" :tasks="todos" />
      </div>
      <div class="col-md-3">
      <Wall category="Doing" @deleteTask="deleteTask" @moveLeft="moveLeft" @moveRight="moveRight" :tasks="doings" />
      </div>
      <div class="col-md-3">
      <Wall category="Done" @deleteTask="deleteTask" @moveLeft="moveLeft" @moveRight="moveRight" :tasks="dones" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewTask from '@/components/NewTask.vue'
import Wall from '@/components/Wall'
import firebase from 'firebase'

const config = {
    apiKey: process.env.APIkey,
    authDomain: "my-hacktiv8-project.firebaseapp.com",
    databaseURL: "https://my-hacktiv8-project.firebaseio.com",
    projectId: "my-hacktiv8-project",
    storageBucket: "my-hacktiv8-project.appspot.com",
    messagingSenderId: "593728261874"
};

  const firebaseApp = firebase.initializeApp(config)
  const db = firebaseApp.database()
  const tasksRef = db.ref('tasks')

export default {
  components: {
    NewTask,
    Wall
  },
  firebase: {
    tasks: tasksRef
  },
  computed: {
    backlogs: function (){
      return this.tasks.filter(task => task.status == 1)
    },
    todos: function (){
      return this.tasks.filter(task => task.status == 2)
    },
    doings: function (){
      return this.tasks.filter(task => task.status == 3)
    },
    dones: function (){
      return this.tasks.filter(task => task.status == 4)
    }
  },
  methods: {
    addTask (task) {
        tasksRef.push(task);
    },
    deleteTask (task) {
      tasksRef
        .child(task['.key'])
        .remove();
    },
    moveLeft (task) {
      tasksRef
        .child(task['.key'])
        .child('status')
        .set(task['status'] - 1);
    },
    moveRight (task) {
      console.log('TUGAS',task);
      tasksRef
        .child(task['.key'])
        .child('status')
        .set(task['status'] + 1);
    }
  },
}
</script>
