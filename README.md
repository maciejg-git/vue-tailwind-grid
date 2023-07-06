# Vue-tailwind-grid

Light Vue components to make flexbox based grids with Tailwindcss classes. The design and features are similar to Bootstrap grids.

[Documentation and examples.](https://vue-litewind.netlify.app/documentation/grid)


Example of simple 12 columns grid:

```vue
<template>
  <v-container>
    <v-row>
      <v-col class="basis-3/12">
        <div class="column-content">col 1</div>
      </v-col>
      <v-col class="basis-3/12">
        <div class="column-content">col 2</div>
      </v-col>
      <v-col class="basis-6/12">
        <div class="column-content">col 3</div>
      </v-col>
    </v-row>
  </v-container>
</template>
```
