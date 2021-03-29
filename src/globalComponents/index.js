import WelcomeButton from './WelcomeButton.vue'
import CustomInput from './CustomInput.vue'
import CustomInputName from './CustomInputName.vue'
import UserName from './UserName.vue'
import ProvideComponent from './ProvideComponent.vue'

export function setupGlobalComponents(app) {
  app.component('welcome-button', WelcomeButton)
  app.component('custom-input', CustomInput)
  app.component('custom-input-name', CustomInputName)
  app.component('user-name', UserName)
  app.component('provide-component', ProvideComponent)
}

