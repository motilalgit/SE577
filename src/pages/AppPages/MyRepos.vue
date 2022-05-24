<template>
  <div class="q-pa-md row flex flex-center">
    <q-card v-for="item in repos" v-bind:key="item.name" flat class="q-ma-md my-card text-white">
      <q-card-section v-bind:class="item.color">
        <div class="text-h6">{{ item.name }}</div>
      </q-card-section>
    </q-card>
  </div>
  <!-- About, Background, Course, Publications, Photo-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'MyRepoPage',
  data () {
    return {
      repos: []
    }
  },
  mounted () {
    axios
      .get('http://localhost:8082/repo')
      .then(response => {this.repos = response.data})
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
