<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          <div class="title-content">
            <img
              src="@/assets/icon-nobg.png"
              alt="BeanThere logo"
              class="app-logo"
            />
            <span class="app-title">BeanThere</span>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
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
  IonImg,
} from "@ionic/vue";
import { cafeOutline } from "ionicons/icons";
import EntryForm from "@/components/EntryForm.vue";
</script>

<style scoped>
.title-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.app-logo {
  height: 36px;
  width: auto;
}

.app-title {
  font-weight: 600;
  font-size: 1.1rem;
  font-family: "Pacifico", cursive;
}
</style>
