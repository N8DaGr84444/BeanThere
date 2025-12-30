<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><ion-icon :icon="cafeOutline" />BeanThere</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false">
      <EntryForm />
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
  IonIcon,
} from "@ionic/vue";
import { cafeOutline } from "ionicons/icons";
import EntryForm from "@/components/EntryForm.vue";
</script>
