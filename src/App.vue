<template>
  <div id="app">
 <div class="post" v-for="post in getPosts" :key="post.id">
<h2>{{post.title}}</h2>
  </div>
  <div>
   Counter: <strong class="counter">{{ appCounter }}</strong>
 <button type="button" @click="increaseAppCounter()">Increase by 1</button> 
      <button type="button" @click="decreaseAppCounter()">Decrease by 1</button> 
  </div>

  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
export default {
  name: 'App',
  computed:{ ...mapGetters(["getPosts"]),
   appCounter: function() {
      return this.$store.getters.getCounter
    }},
  methods:{ 
    ...mapActions(["fetchPosts"]),
    ...mapMutations(["increment"]),

    increaseAppCounter: function() {
      this.$store.dispatch("incrementactions")
    },
    decreaseAppCounter: function() {
      this.$store.dispatch("decrementactions")
    }
  },
  async mounted(){
    this.fetchPosts("https://jsonplaceholder.typicode.com/posts?_limit=6")
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.post{
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;

}
</style>
