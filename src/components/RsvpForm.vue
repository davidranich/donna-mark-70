<template>
    <div class="px-4 py-12 sm:px-6 lg:px-20">
      <span class="title block text-center text-xl sm:text-2xl lg:text-3xl mb-6">Ready To Party?</span>
  
      <div class="p-6 bg-[#b1c29e] rounded-md shxadow-md">
        <form @submit.prevent="submitRSVP" class="space-y-8">
          <div
            v-for="(guest, index) in guests"
            :key="index"
            class="space-y-4"
          >
            <div v-if="multipleGuests" class="mb-2">
              <h3 class="text-md sm:text-lg font-semibold text-white-100">{{ multipleGuestsLabel(index) }}</h3>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input v-model="guest.first_name" type="text" placeholder="First Name" required class="input" />
              <input v-model="guest.last_name" type="text" placeholder="Last Name" required class="input" />
              <input v-model="guest.phone_number" type="tel" placeholder="Phone Number" required class="input" />
              <input v-model="guest.email" type="email" placeholder="Email Address" required class="input" />
            </div>
  
            <textarea
              v-model="guest.notes"
              placeholder="Notes (dietary restrictions, etc.)"
              rows="3"
              class="input"
            ></textarea>
  
            <div class="text-right">
              <button
                type="button"
                @click="removeGuest(index)"
                v-if="multipleGuests"
                class="add-guest-button text-sm text-red-600 hover:underline"
              >
                Remove Guest
              </button>
            </div>
  
            <hr class="" />
          </div>
  
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button type="button" @click="addGuest" class="add-guest-button">
              <span>Add Another Guest</span>
            </button>
            <button type="submit" class="rsvp-button" :disabled="formSubmitting">
              RSVP
            </button>
          </div>
        </form>
  
        <span v-if="errorMessage" class="error-message block text-center mt-4">{{ errorMessage }}</span>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref, computed, reactive } from "vue";
  import axios from "axios";
  import { getAuthHeaders } from "../auth/auth";
  
  const api = import.meta.env.VITE_API_URL;
  
  const guests = reactive([
    {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      notes: "",
      decision: 1
    },
  ]);
  
  const multipleGuests = computed(() => guests.length > 1);
  
  const errorMessage = ref("");

  const emit = defineEmits(["submitted"]);

  const formSubmitting = ref(false);
  
  const addGuest = () => {
    guests.push({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      decision: 1,
      notes: "",
    });
  };
  
  const removeGuest = (index) => {
    guests.splice(index, 1);
  };

  const multipleGuestsLabel = (index) => {
    return index === 0 ? 'You' : `Guest ${index + 1}`;
  };
  
  const submitRSVP = async () => {
    formSubmitting.value = true;
    try {
        const headers = await getAuthHeaders();
        await axios.post(`${api}/api/70/rsvp`, guests, {
            headers
        }).then(response => {
        })
        .catch(error => {
            errorMessage.value = "Something went wrong! Please try again.";
        })
        .finally(() => {
            errorMessage.value = "";
            guests.splice(0, guests.length, {
                first_name: "",
                last_name: "",
                phone_number: "",
                email: "",
                decision: 1,
                notes: "",
            });
            formSubmitting.value = false;
            
            emit("submitted");
        });
    } catch (error) {
      console.log(error);
    }
  };
</script>
  
<style scoped>
input,
select,
button,
textarea {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25em;
  color: black;
  font-family: Mukta, sans-serif;
  font-weight: 300;
}

input,
textarea {
  background-color: #d1d6b7;
}

button:hover {
    text-decoration: none;
    cursor: pointer;
}

.add-guest-button:hover {
  color: #FFFAF0;
}

.rsvp-button {
  cursor: pointer;
  border: 1px solid black !important;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.rsvp-button:hover {
  border: 1px solid #FFFAF0 !important;
  color: #FFFAF0;
}

.rsvp-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  color: #e53e3e;
  font-size: 0.95rem;
}

.title {
  font-size: 1.5em;
  font-weight: 400;
  color: #FFFAF0;
  font-family: "Julius Sans One", sans-serif;
  letter-spacing: 3px;
}

hr {
    margin: 0.75rem 0;
    color: #d1d6b7;
}
</style>