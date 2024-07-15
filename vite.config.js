import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        //++ ==//==//==//==//==//==| Index Page Route |==//==//==//==//==//== ++
        main: resolve(__dirname, "./index.html"),

        //++ ==//==//==//==//==//==| About Page Route |==//==//==//==//==//== ++
        about: resolve(__dirname, "./public/Pages/about.html"),

        //++ ==//==//==//==//==//==| Contact Page Route |==//==//==//==//==//== ++
        contact: resolve(__dirname, "./public/Pages/contact.html"),

        //++ ==//==//==//==//==//==| Products Page Route |==//==//==//==//==//== ++
        products: resolve(__dirname, "./public/Pages/products.html"),

        //++ ==//==//==//==//==//==| Add To Cart Page Route |==//==//==//==//==//== ++
        addToCart: resolve(__dirname, "./public/Pages/addToCart.html"),
      },
    },
  },
});
