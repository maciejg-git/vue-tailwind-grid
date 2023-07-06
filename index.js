import * as grid from "./components"

export { grid }

export let gridPlugin = {
  install(app, options) {
    Object.entries(grid).forEach((component) => {
      app.component(component[0], component[1])
    })
  }
}
