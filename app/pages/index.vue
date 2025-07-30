<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <div class="max-w-md w-full">
      <!-- Main Card -->
      <div class="bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <!-- Icon/Logo Area -->
        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
          </svg>
        </div>
        
        <!-- Content -->
        <div class="space-y-4">
          <h1 class="text-3xl font-bold text-gray-900">Weather Popup Demo</h1>
          <p class="text-gray-600 leading-relaxed">
            Generate custom weather popup URLs with Base64 encoded data. 
            Perfect for dynamic weather guarantee displays.
          </p>
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
          
          <!-- Generate Custom URL Button -->
          <button
            @click="generateCustomUrl"
            class="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition duration-200 shadow-lg"
          >
            Generate Custom URL
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
          <h3 class="text-sm font-semibold text-gray-700 mb-2">Generated URL:</h3>
          <div class="text-xs text-gray-600 break-all font-mono bg-white p-2 rounded border">
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
        <p class="text-sm text-gray-500">Built with 💙 using Nuxt v4 & Tailwind CSS</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const customUrl = ref('');

// Base64 encoding function
const encodeBase64 = (str) => {
  if (typeof window !== 'undefined') {
    return btoa(unescape(encodeURIComponent(str)));
  }
  // For server-side rendering
  return Buffer.from(str, 'utf8').toString('base64');
};

// Generate URL with Base64 encoded weather data
const generateUrlWithData = (customData) => {
  const jsonString = JSON.stringify(customData);
  const base64Data = encodeBase64(jsonString);
  const currentUrl = window.location.origin;
  return `${currentUrl}/popup?data=${base64Data}`;
};

// Generate a custom URL with sample data
const generateCustomUrl = () => {
  const customWeatherData = {
    plain_language: {
      details: {
        title: "Premium Weather Protection",
        suggested_price: "Add Premium Weather Guarantee for $19.99",
        suggested_price_total: "$39.98 total for 2 days",
        summary_tiers: ["1+ hours of rain = $125.00/day"],
        summary_times: "Rain between 7:00 AM and 7:00 PM each day",
        summary_body: "Premium rain protection with enhanced coverage for your outdoor activities. Get peace of mind with our comprehensive weather guarantee.",
        summary_explainer: "Light rain is when you walk outside and notice wet pavement and small puddles forming.",
        step_1_body: "Our advanced weather monitoring system tracks forecasts for your exact location and itinerary.",
        step_2_body: "Receive instant notifications via text when weather conditions trigger your coverage.",
        step_3_body: "Quick and seamless reimbursement process - money back in your account within 24 hours.",
        action: "Add Premium Coverage"
      }
    }
  };
  
  customUrl.value = generateUrlWithData(customWeatherData);
  
  // Log for debugging
  console.log('Generated custom weather data URL:', customUrl.value);
  console.log('Base64 data:', encodeBase64(JSON.stringify(customWeatherData)));
};

// Copy URL to clipboard
const copyToClipboard = async () => {
  if (customUrl.value) {
    try {
      await navigator.clipboard.writeText(customUrl.value);
      alert('URL copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy URL:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = customUrl.value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('URL copied to clipboard!');
    }
  }
};
</script> 