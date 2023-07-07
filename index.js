import * as grid from "./components"

export { grid }

export let vueTailwindGrid = {
  install(app, options) {
    Object.entries().forEach((component) => {
      app.component(component[0], component[1])
    })
  }
}
