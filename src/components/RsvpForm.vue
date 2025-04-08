<template>
<div class="pxx-4 pxy-20">
    <span class="title">Ready To Party?</span>
    <div class="p-8">  
        <form @submit.prevent="submitRSVP" class="space-y-6">
          <div
            v-for="(guest, index) in guests"
            :key="index"
            class=""
          >
            <div v-if="multipleGuests" class="mb-4">
              <h3 class="text-lg font-semibold text-gray-700">Guest {{ index + 1 }}</h3>
            </div>
  
            <div class="">
              <input
                v-model="guest.first_name"
                type="text"
                placeholder="First Name"
                required
                class="input"
              />
              <input
                v-model="guest.last_name"
                type="text"
                placeholder="Last Name"
                required
                class="input"
              />
              <input
                v-model="guest.phone_number"
                type="tel"
                placeholder="Phone Number"
                required
                class="input"
              />
              <input
                v-model="guest.email"
                type="email"
                placeholder="Email Address"
                required
                class="input"
              />
            </div>
  
            <textarea
              v-model="guest.notes"
              placeholder="Notes (dietary restrictions, etc.)"
              rows="3"
              class="input mt-4"
            ></textarea>
  
            <div class="text-right mt-2">
              <button
                type="button"
                @click="removeGuest(index)"
                v-if="multipleGuests"
                class="add-guest-button"
              >
                Remove Guest
              </button>
            </div>
          </div>
  
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              type="button"
              @click="addGuest"
              class="add-guest-button"
            >
                <span>Add {{ guests.length > 1 ? 'Another' : '' }} Guest</span>
            </button>
            <button
              type="submit"
              class="rsvp-button"
            >
                RSVP
            </button>
          </div>
        </form>
        <span v-if="errorMessage" class="error-message text-center mt-4">{{ errorMessage }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, reactive } from "vue";
  import axios from "axios";
  import { getAuthHeaders } from "../auth/auth";
  
  // Use environment variable for API URL
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
  
  // Computed value to determine if more than one guest is present
  const multipleGuests = computed(() => guests.length > 1);
  
  const errorMessage = ref("");

  const emit = defineEmits(["submitted"]);
  
  // ➕ Add another guest
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
  
  // ➖ Remove guest by index
  const removeGuest = (index) => {
    guests.splice(index, 1);
  };
  
  const submitRSVP = async () => {
    try {
        const headers = await getAuthHeaders();
        const res = await axios.post(`${api}/api/70/rsvp`, guests, {
            headers
        });
        errorMessage.value = "";
        guests.splice(0, guests.length, {
            first_name: "",
            last_name: "",
            phone_number: "",
            email: "",
            decision: 1,
            notes: "",
        });

        emit("submitted");
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage.value = error.response.data.message;
        } else {
            errorMessage.value = "Something went wrong.";
        }
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
    font-size: 0.9em;
    boxrder: 1px solid #FFFAF0;
    border-radius: 0.25em;
    color: black;
    font-family: Mukta, sans-serif;
    font-weight: 100;
}


input, textarea {
    background-color: #d1d6b7;
}
  
button[type="button"] {
    border: none;
    cursor: pointer;
}

.add-guest-button:hover {
    color: #FFFAF0;
}

.rsvp-button {
    cursor: pointer;
    border: 1px solid black !important;
}

.rsvp-button:hover {
    border: 1px solid #FFFAF0 !important;
    color: #FFFAF0;
}
  
.error {
    color: red;
}

.card {
    padding: 15px;
    border-radius: 0.75em;
    background-color: #eee2c1 !important;
}

.header-title {
    font-family: Mukta,sans-serif;
    letter-spacing: 4px;
    font-style: normal;
    text-transform: uppercase;
    color: #d38d38;
}

.title {
    font-size: 1.5em;
    font-weight: 400;
    color: #FFFAF0;
    font-family: Mukta, sans-serif;
    letter-spacing: 3px;
}

.error-message {
    color: #d1d6b7;
}

hr {
    margin: 0.75rem 0;
    color: #000;
}
</style>