<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
  >
    <div class="max-w-md w-full">
      <!-- Main Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <!-- Icon/Logo Area -->
        <div
          class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
            ></path>
          </svg>
        </div>

        <!-- Content -->
        <div class="space-y-4">
          <h1 class="text-3xl font-bold text-gray-900">Weather Popup Demo</h1>
          <p class="text-gray-600 leading-relaxed">
            Generate custom weather popup URLs with Base64 encoded data. Perfect
            for dynamic weather guarantee displays.
          </p>
        </div>

        <!-- JSON Input Section -->
        <div class="space-y-4">
          <div class="text-left">
            <label for="jsonInput" class="block text-sm font-medium text-gray-700 mb-2">
              Custom JSON Data:
            </label>
            <textarea
              id="jsonInput"
              v-model="jsonInput"
              placeholder="Modify the JSON data or paste your own..."
              class="w-full h-96 p-3 border border-gray-300 rounded-lg text-sm font-mono resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              :class="{ 'border-red-500 focus:ring-red-500 focus:border-red-500': jsonError }"
            ></textarea>
            <div v-if="jsonError" class="mt-1 text-sm text-red-600">
              {{ jsonError }}
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="space-y-3">
          <!-- Default Popup Link -->
          <NuxtLink
            to="/popup"
            class="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition duration-200 shadow-lg"
          >
            View Default Popup
          </NuxtLink>

          <!-- Generate Custom URL from JSON Button -->
          <button
            @click="generateCustomUrl"
            :disabled="!jsonInput.trim()"
            class="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Generate URL from JSON
          </button>

          <!-- Reset to Sample Data Button -->
          <button
            @click="useSampleData"
            class="block w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition duration-200 shadow-lg"
          >
            Reset to Sample Data
          </button>

          <!-- View Custom Popup Button -->
          <a
            v-if="customUrl"
            :href="customUrl"
            target="_blank"
            class="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition duration-200 shadow-lg"
          >
            Open Custom Popup
          </a>
        </div>

        <!-- Generated URL Display -->
        <div v-if="customUrl" class="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 class="text-sm font-semibold text-gray-700 mb-2">
            Generated URL:
          </h3>
          <div
            class="text-xs text-gray-600 break-all font-mono bg-white p-2 rounded border"
          >
            {{ customUrl }}
          </div>
          <button
            @click="copyToClipboard"
            class="mt-2 text-xs bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded transition"
          >
            Copy URL
          </button>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-6">
        <p class="text-sm text-gray-500">
          Built with 💙 using Nuxt v4 & Tailwind CSS
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Sample weather data
const sampleWeatherData = {
  plain_language: {
    details: {
      action: "Add",
      close: "Close Window",
      disclaimer:
        "By purchasing a Weather Guarantee, I agree to share my name, email and phone number with Sensible Weather to fulfill my purchase, and agree to Sensible Weather's policies:",
      step_1_body:
        "Sensible Weather tracks the forecast for a centralized location based on your itinerary.",
      step_1_heading: "Watching the Forecast",
      step_2_body:
        "Bad weather? Sensible will text when your reimbursement is ready.",
      step_2_heading: "Keeping you Updated",
      step_3_body:
        "For multi-day experiences, the daily reimbursement amount is based on the average spend across the whole trip, so it may differ from your actual daily costs.",
      step_3_heading: "Money Back, Promptly",
      steps_heading: "What to Expect from Sensible Weather:",
      suggested_price: "Add a Weather Guarantee for $2.40",
      suggested_price_total: "",
      summary_body:
        'A "light rain" of 1.5 mm, or more, for 1+ hours will trigger the daily coverage. We\'ll alert you if bad weather is on the horizon.',
      summary_body_alt_unit:
        'A "light rain" of 0.15 cm, or more, for 1+ hours will trigger the daily coverage. We\'ll alert you if bad weather is on the horizon.',
      summary_explainer:
        "Light rain is when you walk outside, and the ground looks like it's been raining, think small puddles.",
      summary_heading: "Included in Your Coverage:",
      summary_subheading: "How's the coverage triggered?",
      summary_tiers: ["1+ hours of rain = $80.00/day"],
      summary_times: "Rain between 10:00 AM and 5:00 PM each day.",
      title: "Get Reimbursed for Bad Weather",
    },
    documents: {
      privacy_policy: {
        link: "https://www.sensibleweather.com/legal/sensible-weather-privacy-policy",
        title: "Privacy Policy",
      },
      terms_conditions: {
        link: "https://www.sensibleweather.com/legal/guarantee-terms-and-conditions",
        title: "Terms and Conditions",
      },
    },
    main: {
      action: "Add Weather Guarantee",
      body: "Give yourself peace of mind knowing you'll be proactively reimbursed up to $80.00 if it rains 1+ hours between 10:00 AM and 5:00 PM.",
      bonus_body:
        "You will still receive a reimbursement if you decide to brave the elements. Enjoy the rest of your experience with some extra spending cash!",
      bonus_header: " ",
      details_action: "See Details",
      disclaimer:
        "By purchasing a Weather Guarantee, I agree to share my name, email and phone number with Sensible Weather to fulfill my purchase, and agree to Sensible Weather's policies:",
      open_details: "Learn More",
      suggested_price: "Add a Weather Guarantee for $2.40",
      suggested_price_total: " ",
      title: "Get Reimbursed for Bad Weather",
    },
  },
  documents: [
    {
      name: "Terms and Conditions",
      link: "https://www.sensibleweather.com/legal/guarantee-terms-and-conditions",
    },
    {
      name: "Privacy Policy",
      link: "https://www.sensibleweather.com/legal/sensible-weather-privacy-policy",
    },
  ],
};

const customUrl = ref("");
const jsonInput = ref(JSON.stringify(sampleWeatherData, null, 2));
const jsonError = ref("");

// Base64 encoding function
const encodeBase64 = (str) => {
  if (typeof window !== "undefined") {
    return btoa(unescape(encodeURIComponent(str)));
  }
  // For server-side rendering
  return Buffer.from(str, "utf8").toString("base64");
};

// Generate URL with Base64 encoded weather data
const generateUrlWithData = (customData) => {
  const jsonString = JSON.stringify(customData);
  const base64Data = encodeBase64(jsonString);
  const currentUrl = window.location.origin;
  return `${currentUrl}/popup?data=${base64Data}`;
};

// Validate and parse JSON input
const validateJsonInput = () => {
  jsonError.value = "";
  
  if (!jsonInput.value.trim()) {
    jsonError.value = "Please enter JSON data";
    return null;
  }

  try {
    return JSON.parse(jsonInput.value.trim());
  } catch (error) {
    jsonError.value = "Invalid JSON format: " + error.message;
    return null;
  }
};

// Generate a custom URL from JSON input
const generateCustomUrl = () => {
  const jsonData = validateJsonInput();
  
  if (!jsonData) {
    return; // Validation failed
  }

  customUrl.value = generateUrlWithData(jsonData);

  // Log for debugging
  console.log("Generated custom URL:", customUrl.value);
  console.log("Base64 data:", encodeBase64(JSON.stringify(jsonData)));
};

// Reset to sample data
const useSampleData = () => {
  jsonInput.value = JSON.stringify(sampleWeatherData, null, 2);
  jsonError.value = "";
};

// Copy URL to clipboard
const copyToClipboard = async () => {
  if (customUrl.value) {
    try {
      await navigator.clipboard.writeText(customUrl.value);
      alert("URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy URL:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = customUrl.value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("URL copied to clipboard!");
    }
  }
};
</script>
