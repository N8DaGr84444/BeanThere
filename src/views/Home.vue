<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title><ion-icon :icon="cafeOutline" />BeanThere</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"><ion-icon :icon="cafeOutline" />BeanThere</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="BeanThere" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { cafeOutline } from 'ionicons/icons'
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
