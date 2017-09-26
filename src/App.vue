<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <ul>
      <li v-for="item in items" v-bind:class='{finished:item.isFinished}'>
        {{item.label}}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: 'A Todo List',
        items: [
          {
            label: '去游泳',
            isFinished: true,
          },
          {
            label: '去黄山',
            isFinished: false,
          },
          {
            label: '去丽江',
            isFinished: true,
          }
        ]
      }
    }
  }
</script>

<style>
  .finished{
    text-decoration: line-through;
    opacity: 0.6;
  }
  ul{
    margin:0;
    padding:0;
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
  body{
    width:100%;
    background-color:rgba(23,180,52,0.6);
  }
</style>
