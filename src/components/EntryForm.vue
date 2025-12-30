<template>
  <ion-list>
    <ion-item>
      <ion-input
        label="Coffee Shop Name"
        v-model="coffeeShop"
        label-placement="stacked"
        placeholder="World's Greatest Coffee"
      />
    </ion-item>
    <ion-item>
      <ion-input
        label="Location"
        v-model="location"
        label-placement="stacked"
        placeholder="Earth"
      />
    </ion-item>
    <ion-item>
      <ion-label>Cost</ion-label>
      <CostScale v-model="cost" />
    </ion-item>
    <ion-item>
      <ion-label>Vibe</ion-label>
      <ion-range
        :label="vibeLabel"
        label-placement="end"
        :min="1"
        :max="5"
        :step="1"
        snaps
        v-model="vibe"
      />
    </ion-item>
    <ion-item>
      <ion-checkbox label-placement="end" v-model="wifi"
        >Good WiFi?</ion-checkbox
      >
    </ion-item>
    <ion-item>
      <ion-checkbox label-placement="end" v-model="seating"
        >Adequate Seating?</ion-checkbox
      >
    </ion-item>
    <ion-item>
      <ion-input
        label="Drink Name"
        v-model="drinkName"
        label-placement="stacked"
        placeholder="Super Latte"
      />
    </ion-item>
    <ion-item>
      <ion-checkbox label-placement="end" v-model="foodAvailable"
        >Food available?</ion-checkbox
      >
    </ion-item>
    <ion-item v-if="foodAvailable">
      <ion-select
        label="Food Options"
        label-placement="floating"
        v-model="selectedFoodOptions"
        multiple
      >
        <ion-select-option
          v-for="option in foodOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label>Rating</ion-label>
      <ion-range
        :label="ratingLabel"
        label-placement="end"
        :min="1"
        :max="5"
        :step="1"
        snaps
        v-model="rating"
      />
    </ion-item>
    <ion-item>
      <ion-textarea
        label="Notes"
        label-placement="stacked"
        v-model="notes"
        placeholder="Cool latte art, nice location, friendly baristas..."
      />
    </ion-item>
  </ion-list>
  <ion-button
    expand="block"
    class="ion-margin-top"
    style="width: 90%; margin-left: 5%"
    @click="() => console.log('Entry Saved!!')"
  >
    Save Entry
  </ion-button>
</template>

<script lang="ts" setup>
import {
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonRange,
  IonCheckbox,
  IonTextarea,
} from "@ionic/vue";
import { ref, computed } from "vue";
import CostScale from "@/components/CostScale.vue";

const coffeeShop = ref<string>("");
const location = ref<string>("");
const cost = ref<number>(1);
const drinkName = ref<string>("");
const vibe = ref<number>(0);
const vibeLabel = computed(() => `${vibe.value}/5`);
const wifi = ref<boolean>(false);
const seating = ref<boolean>(false);
const foodAvailable = ref<boolean>(false);
const foodOptions = ref(["Pastries", "Light Bites", "Meals"]);
const selectedFoodOptions = ref<string[]>([]);
const rating = ref<number>(0);
const notes = ref<string>("");
const ratingLabel = computed(() => `${rating.value}/5`);
</script>

<style></style>
