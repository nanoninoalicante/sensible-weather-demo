<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="max-w-2xl w-full">
      <!-- Main Modal -->
      <div class="bg-white rounded-lg shadow-2xl overflow-hidden relative">
        <!-- Header -->
        <div class="bg-[rgb(12,66,97)] px-36 py-12 text-white text-center relative">
          <button 
            @click="closeModal" 
            class="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-bold"
          >
            ×
          </button>
          <h1 class="text-3xl font-bold mb-8">{{ weatherData.plain_language.details.title }}</h1>
          <!-- Checkmark Icon -->
          <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="p-8 space-y-10">
          <!-- Coverage Summary -->
          <div class="space-y-6 text-center">
            <h2 class="text-lg font-semibold text-gray-900">{{ weatherData.plain_language.details.summary_heading }}</h2>
            <p class="text-gray-700">{{ weatherData.plain_language.details.summary_times }}</p>
            
            <!-- Coverage Tiers -->
            <div class="bg-[rgb(12,66,97)] text-white p-8 rounded-lg flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div class="w-2 h-2 bg-white rounded-full"></div>
                  <div class="w-1 h-1 bg-white rounded-full ml-1"></div>
                  <div class="w-1 h-1 bg-white rounded-full ml-1"></div>
                </div>
                <span class="font-medium">{{ weatherData.plain_language.details.summary_tiers[0] }}</span>
              </div>
            </div>
          </div>

          <!-- Coverage Trigger -->
          <div class="space-y-6 text-center">
            <h3 class="text-lg font-semibold text-gray-900">{{ weatherData.plain_language.details.summary_subheading }}</h3>
            <p class="text-gray-700">{{ weatherData.plain_language.details.summary_body }}</p>
            
            <!-- Explainer Box -->
            <div class="bg-[rgb(12,66,97)] text-white p-4 rounded-lg flex items-center space-x-4">
              <div class="flex-shrink-0">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7 7c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 5.25 7 13 7 13s7-7.75 7-13zm-7 3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
              </div>
              <p class="text-sm">{{ weatherData.plain_language.details.summary_explainer }}</p>
            </div>
          </div>

          <!-- Steps Section -->
          <div class="space-y-8 text-center">
            <h3 class="text-lg font-semibold text-gray-900">{{ weatherData.plain_language.details.steps_heading }}</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Step 1 -->
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg class="w-8 h-8 text-[rgb(12,66,97)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900">{{ weatherData.plain_language.details.step_1_heading }}</h4>
                <p class="text-sm text-gray-600">{{ weatherData.plain_language.details.step_1_body }}</p>
              </div>

              <!-- Step 2 -->
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg class="w-8 h-8 text-[rgb(12,66,97)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900">{{ weatherData.plain_language.details.step_2_heading }}</h4>
                <p class="text-sm text-gray-600">{{ weatherData.plain_language.details.step_2_body }}</p>
              </div>

              <!-- Step 3 -->
              <div class="text-center space-y-4">
                <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg class="w-8 h-8 text-[rgb(12,66,97)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900">{{ weatherData.plain_language.details.step_3_heading }}</h4>
                <p class="text-sm text-gray-600">{{ weatherData.plain_language.details.step_3_body }}</p>
              </div>
            </div>
          </div>

          <!-- Pricing Section -->
          <div class="bg-gray-50 p-8 rounded-lg text-center space-y-6">
            <h3 class="text-2xl font-bold text-[rgb(12,66,97)]">{{ weatherData.plain_language.details.suggested_price }}</h3>
            <p class="text-lg font-semibold text-gray-900">{{ weatherData.plain_language.details.suggested_price_total }}</p>
            
            <button 
              @click="addGuarantee"
              class="w-full bg-[rgb(12,66,97)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(8,45,66)] transform hover:scale-105 transition duration-200"
            >
              {{ weatherData.plain_language.details.action }}
            </button>
          </div>

          <!-- Disclaimer -->
          <div class="text-xs text-gray-600 leading-relaxed text-center">
            <p class="mb-2">{{ weatherData.plain_language.details.disclaimer }}</p>
            <div class="flex space-x-4 justify-center">
              <a 
                v-for="doc in weatherData.documents" 
                :key="doc.name"
                :href="doc.link" 
                target="_blank"
                class="text-[rgb(12,66,97)] hover:text-[rgb(8,45,66)] underline"
              >
                {{ doc.name }}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div class="text-center pt-8">
            <button 
              @click="closeModal"
              class="text-[rgb(12,66,97)] hover:text-[rgb(8,45,66)] font-medium"
            >
              {{ weatherData.plain_language.details.close }}
            </button>
          </div>
        </div>
      </div>

      <!-- Demo Controls -->
      <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 class="font-semibold text-gray-900 mb-4">Demo Controls</h3>
        <div class="flex gap-2 flex-wrap">
          <button 
            @click="loadSampleData"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Load Sample Data
          </button>
          <NuxtLink 
            to="/" 
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
          >
            ← Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Sample weather guarantee data
const weatherData = reactive({
  plain_language: {
    details: {
      action: "Add",
      close: "Close Window",
      disclaimer: "By purchasing a Weather Guarantee, I agree to share my name, email and phone number with Sensible Weather to fulfill my purchase, and agree to Sensible Weather's policies:",
      step_1_body: "Sensible Weather tracks the forecast for a centralized location based on your itinerary.",
      step_1_heading: "Watching the Forecast",
      step_2_body: "Bad weather? Sensible will text when your reimbursement is ready.",
      step_2_heading: "Keeping you Updated",
      step_3_body: "For multi-day experiences, the daily reimbursement amount is based on the average spend across the whole trip, so it may differ from your actual daily costs.",
      step_3_heading: "Money Back, Promptly",
      steps_heading: "What to Expect from Sensible Weather:",
      suggested_price: "Add a Weather Guarantee for $3.15/day",
      suggested_price_total: "$6.29 total",
      summary_body: "A \"light rain\" of 1.5 mm, or more, for 3+ hours will trigger the daily coverage. We'll alert you if bad weather is on the horizon.",
      summary_body_alt_unit: "A \"light rain\" of 0.15 cm, or more, for 3+ hours will trigger the daily coverage. We'll alert you if bad weather is on the horizon.",
      summary_explainer: "Light rain is when you walk outside, and the ground looks like it's been raining, think small puddles.",
      summary_heading: "Included in Your Coverage:",
      summary_subheading: "How's the coverage triggered?",
      summary_tiers: [
        "3+ hours of rain = $40.00/day"
      ],
      summary_times: "Rain between 10:00 AM and 5:00 PM each day.",
      title: "Get Reimbursed for Bad Weather"
    },
    documents: {
      privacy_policy: {
        link: "https://www.sensibleweather.com/legal/sensible-weather-privacy-policy",
        title: "Privacy Policy"
      },
      terms_conditions: {
        link: "https://www.sensibleweather.com/legal/guarantee-terms-and-conditions",
        title: "Terms and Conditions"
      }
    },
    main: {
      action: "Add Weather Guarantee",
      body: "Give yourself peace of mind knowing you'll be proactively reimbursed up to $40.00 each day it rains 3+ hours between 10:00 AM and 5:00 PM (up to $80.00 if it rains every day).",
      bonus_body: "You will still receive a reimbursement if you decide to brave the elements. Enjoy the rest of your experience with some extra spending cash!",
      bonus_header: " ",
      details_action: "See Details",
      disclaimer: "By purchasing a Weather Guarantee, I agree to share my name, email and phone number with Sensible Weather to fulfill my purchase, and agree to Sensible Weather's policies:",
      open_details: "Learn More",
      suggested_price: "Add a Weather Guarantee for $3.15/day",
      suggested_price_total: "$6.29 total",
      title: "Get Reimbursed for Bad Weather"
    }
  },
  documents: [
    {
      name: "Terms and Conditions",
      link: "https://www.sensibleweather.com/legal/guarantee-terms-and-conditions"
    },
    {
      name: "Privacy Policy",
      link: "https://www.sensibleweather.com/legal/sensible-weather-privacy-policy"
    }
  ]
})

const closeModal = () => {
  alert('Modal would close in real implementation')
}

const addGuarantee = () => {
  alert('🎉 Weather Guarantee would be added to cart!')
}

const loadSampleData = () => {
  // You can modify the data here to test different scenarios
  weatherData.plain_language.details.title = "Get Reimbursed for Bad Weather (Updated!)"
  weatherData.plain_language.details.suggested_price = "Add a Weather Guarantee for $5.25/day"
  weatherData.plain_language.details.suggested_price_total = "$10.50 total"
  alert('Sample data updated! Notice the title and pricing changes.')
}
</script> 