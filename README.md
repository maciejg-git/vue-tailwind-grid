# Vue-tailwind-grid

Light Vue components to make flexbox based grids with Tailwindcss classes. The design and features are similar to Bootstrap grids.

[Documentation and examples.](https://vue-litewind.netlify.app/documentation/grid)

## Installation

**[Option 1]** Install vue plugin from npm
```bash
npm install vue-tailwind-grid
```

```javascript
// main.js

import gridPlugin from "vue-tailwind-grid"

app.use(gridPlugin)
```

Add `vue-tailwind-grid` to `content` array so tailwind can generate classes used by components.

```javascript
// tailwind.config.js

module.exports = {
  content: [
    "node_modules/vue-tailwind-grid/grid-components/*.vue",
    ...
  ],
}
```

**[Option 2]** or simply copy/clone `grid-components` to your `src` and register them normally as components.

## Example

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
