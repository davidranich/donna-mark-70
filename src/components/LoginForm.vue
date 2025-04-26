<template>
    <div class="px-4 py-12 sm:px-6 lg:px-20">
      <span class="title block text-center text-xl sm:text-2xl lg:text-3xl mb-6">Administrator Login</span>
  
      <div class="p-6 bg-[#b1c29e] rounded-md shxadow-md">
        <form @submit.prevent="submitLogin">
            <div>
                <input v-model="email" type="text" placeholder="Email Address" required class="input" />
                <input v-model="password" type="password" placeholder="Password" required class="input" />
            </div>

            <hr class="" />
  
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button type="submit" class="submit-button" :disabled="formSubmitting">
              Login
            </button>
          </div>
        </form>
  
        <span v-if="errorMessage" class="error-message block text-center mt-4">{{ errorMessage }}</span>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { getAuthHeaders } from "../auth/auth";

  import { useRouter } from "vue-router";

  const router = useRouter();
  
  const api = import.meta.env.VITE_API_URL;

  const email = ref('');
  const password = ref('');
  
  const errorMessage = ref("");

  const formSubmitting = ref(false);
  
const submitLogin = async () => {
    errorMessage.value = '';
    try {
        const headers = await getAuthHeaders();
        const response = await axios.post(`${api}/api/70/login`, {
            email: email.value,
            password: password.value
        }, headers);
  
        localStorage.setItem('authToken', response.data.token);
        router.push('/dashboard');
    } catch (err) {
      errorMessage.value = 'Invalid credentials';
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

.submit-button {
  cursor: pointer;

  border: 1px solid #FFFAF0 !important;
  color: #FFFAF0;
  
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.submit-button:hover {
  border: 1px solid black !important;
  color: black;
}

.submit-button:disabled {
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