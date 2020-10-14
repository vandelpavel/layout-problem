<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MainLayout'
});
</script>

<template>
  <q-layout view="hHh LpR lfr">
    <q-header elevated class="bg-primary text-white">
      <q-tabs align="center">
        <q-btn padding="md" flat unelevated to="/">
          Page 1
        </q-btn>
        <q-btn padding="md" flat unelevated to="/page2">
          Page 2
        </q-btn>
      </q-tabs>
    </q-header>

    <q-footer elevated class="bg-primary text-white">
      <q-item to="/">
        <q-item-section class="text-white">
          page1
        </q-item-section>
      </q-item>
      <q-item to="/page2">
        <q-item-section class="text-white">
          page2
        </q-item-section>
      </q-item>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
