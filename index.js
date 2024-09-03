import * as grid from "./grid-components"

export default {
  install(app, options) {
    Object.entries(grid).forEach((component) => {
      app.component(component[0], component[1])
    })
  }
}
