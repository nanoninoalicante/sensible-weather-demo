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
          <h1 class="text-3xl font-bold text-gray-900">Welcome Home</h1>
          <p class="text-gray-600 leading-relaxed">
            This is the home page of your beautiful Nuxt v4 application. 
            Experience modern design with Tailwind CSS.
          </p>
        </div>
        
        <!-- Navigation Button -->
        <NuxtLink 
          to="/popup" 
          class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition duration-200 shadow-lg"
        >
          <span>Go to Popup Page</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
      
      <!-- Footer -->
      <div class="text-center mt-6">
        <p class="text-sm text-gray-500">Built with 💙 using Nuxt v4 & Tailwind CSS</p>
      </div>
    </div>
  </div>
</template> 