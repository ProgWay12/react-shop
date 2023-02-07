import '../resources/app/styles/critical.scss'
import '../resources/app/styles/main.scss'
import '../resources/app/styles/utility/animations.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}