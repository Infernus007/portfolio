import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  data: {
    myData: '/cardDetails.json' // Replace '/data.json' with the actual path to your JSON file
  },


});