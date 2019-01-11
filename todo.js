(function() {
    'use strict';
  
    var vm = new Vue({
      el: '#app',
      data: {
        newItem: '',
        todos: []
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
          if (confirm('本当に削除していいですか?')) {
            this.todos.splice(index, 1);
          }
        }
      },
      computed: {
          remaining: function() {
              var items = this.todos.filter(function(todo){
                return !todo.isDone;
              });
              return items.length;
          }
      }
    });
  })();