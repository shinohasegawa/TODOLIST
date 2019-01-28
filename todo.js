(function() {
    'use strict';
  
    var vm = new Vue({
      el: '#app',
      data: {
        newItem: '',
        todos: []
      },
      watch: {
        handler: function() {
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
      },
      mounted: function() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      },
      methods: {
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.todos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('削除しますか?')) {
            this.todos.splice(index, 1);
          }
        },
        purge: function(index) {
          if (!confirm('全て削除しますか?')) {
            return;
          }
          this.todos = this.remaining;
        }
      },
      computed: {
          remaining: function() {
              return this.todos.filter(function(todo) {
                return !todo.isDone;
              })
          }
      }
    });
    // import VueResource from 'vue-resource'

    // Vue.use(VueResource);
    // Vue.http.options.root = 'https://hasegawa-f7350.firebaseio.com/data.json'
  })();