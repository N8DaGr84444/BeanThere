<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><ion-icon :icon="cafeOutline" />BeanThere History</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false">
      <ion-list>
        <ion-item
          v-for="entry in entries"
          :key="entry.id"
          button
          @click="() => console.log('Entry clicked', entry.id)"
        >
          <ion-label>
            <h2>{{ entry.shop_name }}</h2>
            <p>Rating: {{ entry.rating }}/5</p>
            <p>{{ entry.drink }}</p>
            <p>Date Visited: {{ entry.created_at }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  onIonViewWillEnter,
} from "@ionic/vue";
import { cafeOutline } from "ionicons/icons";
import { ref } from "vue";
import { getEntries } from "@/entriesRepo";
import type { CoffeeEntry } from "@/entriesRepo";

const entries = ref<Array<CoffeeEntry>>([]);

onIonViewWillEnter(async () => {
  entries.value = await getEntries();
});
</script>
