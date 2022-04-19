<template>
  <div class="q-pa-md row flex flex-center">
    <q-card flat class="q-ma-md my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Repo 1</div>
      </q-card-section>
    </q-card>
    <q-card flat class="q-ma-md my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Repo 2</div>
      </q-card-section>
    </q-card>
    <q-card flat class=" q-ma-md my-card bg-accent text-white">
      <q-card-section>
        <div class="text-h6">Repo 3</div>
      </q-card-section>
    </q-card>
    <q-card flat class="q-ma-md my-card bg-warning text-white">
      <q-card-section>
        <div class="text-h6">Repo 4</div>
      </q-card-section>
    </q-card>
  </div>
  <!-- About, Background, Course, Publications, Photo-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyRepoPage'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
