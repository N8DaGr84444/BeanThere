<template>
  <div class="entry-form-container">
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
      <ion-item lines="full">
        <ion-checkbox slot="start" label-placement="end" v-model="wifi"
          >Good WiFi?</ion-checkbox
        >
      </ion-item>
      <ion-item lines="full">
        <ion-checkbox slot="start" label-placement="end" v-model="seating"
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
      <ion-item lines="full">
        <ion-checkbox slot="start" label-placement="end" v-model="foodAvailable"
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
      id="open-toast"
      class="save-button"
      style="width: 90%; margin-left: 5%"
      @click="saveEntry"
    >
      Save Entry
    </ion-button>
    <ion-toast
      trigger="open-toast"
      position="top"
      position-anchor="open-toast"
      message="Coffee entry saved, drink up!"
      :duration="5000"
    ></ion-toast>
  </div>
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
  IonSelect,
  IonSelectOption,
  IonToast,
} from "@ionic/vue";
import { ref, computed } from "vue";
import CostScale from "@/components/CostScale.vue";
import { addEntry } from "@/entriesRepo";

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

const resetForm = () => {
  coffeeShop.value = "";
  location.value = "";
  cost.value = 1;
  drinkName.value = "";
  vibe.value = 0;
  wifi.value = false;
  seating.value = false;
  foodAvailable.value = false;
  selectedFoodOptions.value = [];
  rating.value = 0;
  notes.value = "";
};

const saveEntry = async () => {
  try {
    const entry = await addEntry({
      shop_name: coffeeShop.value,
      shop_location: location.value,
      cost_level: cost.value,
      vibe: vibe.value,
      wifi: wifi.value,
      seating: seating.value,
      drink: drinkName.value,
      food_level: foodAvailable.value ? selectedFoodOptions.value : undefined,
      rating: rating.value,
      notes: notes.value,
    });
    console.log("Entry saved: ", entry);
  } catch (error) {
    console.error("Error saving entry: ", error);
  } finally {
    resetForm();
  }
};
</script>

<style>
.entry-form-container {
  background: var(--ion-background-color);
  padding-bottom: 24px;
}

.save-button {
  width: 90%;
  margin: 24px auto 0;
}
</style>
