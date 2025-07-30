<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
/* Roobert Font Definitions */
@font-face {
  font-family: 'Roobert';
  src: url('/Roobert-Font/RoobertTRIAL-Regular-BF67243fd53fdf2.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Roobert';
  src: url('/Roobert-Font/RoobertTRIAL-Medium-BF67243fd53e059.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Roobert';
  src: url('/Roobert-Font/RoobertTRIAL-SemiBold-BF67243fd54213d.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Roobert';
  src: url('/Roobert-Font/RoobertTRIAL-Bold-BF67243fd540abb.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Roobert';
  src: url('/Roobert-Font/RoobertTRIAL-Heavy-BF67243fd53e164.otf') format('opentype');
  font-weight: 800;
  font-style: normal;
  font-display: fallback;
}

/* Apply Roobert to h1 tags */
h1, h2, h3 {
  font-weight: 400;
  font-family: 'Roobert', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* Smooth font transitions and prevent layout shifts */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Prevent font loading flicker globally */
* {
  font-variation-settings: normal;
}
</style>
