<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'Page2'
});
</script>

<template>
  <q-page>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </q-page>
</template>

<style lang="scss" scoped>
.square {
  height: 500px;
  width: 500px;
  background-color: blue;
  margin: 20px auto;
}
</style>
