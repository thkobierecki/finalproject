import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    MONGODB_URI: 'mongodb+srv://tomekkobierecki:test123@finalproject.j3mjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    SECRET: 'lkenklfnvklnlfvnslknvfmlmkfnjbvlm;dc',
    GITHUB_CLIENT: 'c63c42c7c5a1f1747546',
    GITHUB_SECRET: 'f98a6cb317e3b039be462b1e46148899edf6a572',
    GOOGLE_ID: '18024157301-7sjvruf2pvlhcj89uq921lq0kah456uu.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    APP_URL: 'http://localhost:3000',
  },
});
