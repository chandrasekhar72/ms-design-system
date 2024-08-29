import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Toaster } from 'sonner'
import App from './App.tsx'
import './main.scss'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position='top-right' toastOptions={{ classNames: { title: "sonner-title", description: "sonner-description", error: "sonner-error" } }} />
      <App />
    </Provider>
  </StrictMode>,
)
