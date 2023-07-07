import * as grid from "./components"

export default {
  install(app, options) {
    Object.entries(grid).forEach((component) => {
      app.component(component[0], component[1])
    })
  }
}
