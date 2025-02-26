// nuxt.config.ts
export default defineNuxtConfig({
  // Définition de la date de compatibilité (facultatif, mais utile pour la gestion des versions)
  compatibilityDate: '2024-11-01',
  
  // Activation des outils de développement
  devtools: { enabled: true },

  // Déclaration des modules Nuxt
  modules: [
    '@pinia/nuxt', // Pinia pour le state management
    '@nuxt/ui',    // UI Kit de Nuxt
    '@nuxtjs/tailwindcss', // Intégration de Tailwind CSS
  ],

  // Ajout des fichiers CSS (si tu utilises un fichier personnalisé)
  css: ['@/assets/css/tailwind.css'],
  

  // Configuration de Vite (système de bundling et de serveurs de développement)
  // vite: {
  //   server: {
  //     hmr: {
  //       port: 4000, // Port pour HMR
  //       host: '0.0.0.0', // Permet l'accès depuis d'autres appareils
  //     }
  //   }
  // },

  // Gestion dynamique de l'URL de ton backend (optionnel)
  // runtimeConfig: {
  //   public: {
  //     apiBase: process.env.API_BASE || 'http://localhost:8000/api' // Exemple d'URL de ton backend
  //   }
  // },
})
