<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <input id="input" v-model="newItem" v-on:keyup.enter="addNew">

    <ul>
      <li v-for="item in items" v-bind:class='{finished:item.isFinished}'
          v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  import Store from './store'

  export default {
    data() {
      return {
        title: 'A Todo List',
        items: Store.fetch(),
//          {
//            label: '去游泳',
//            isFinished: true,
//          },
//          {
//            label: '去黄山',
//            isFinished: false,
//          }

        newItem: '',
      }
    },
    watch: {
      items: {
        handler: function (items) {
//          console.log(val, oldVal);
          Store.save(items);
        },
        deep: true //深层复制
      }
    },
    methods: {
      toggleFinish: function (item) {
//        console.log(item);
        item.isFinished = !item.isFinished;
      },
      addNew: function () {
        console.log(this.newItem);
        this.items.push({
          label: this.newItem,
          isFinished: false,
        });//添加新的item

        this.newItem = '';//清空输入框
      }
    }

  }
</script>

<style>
  #input {
    margin-bottom: 30px;

  }

  .finished {
    text-decoration: line-through;
    opacity: 0.6;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 20px;
  }

  body {
    width: 100%;
    background-color: rgba(23, 180, 52, 0.6);
  }
</style>
