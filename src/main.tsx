import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";
import App from "./App.tsx"
import { ThemeProvider } from "./context/ThemeContext.tsx";
import "./i18n";

import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <ThemeProvider>
        <Auth0Provider
          domain="dev-6tk1bv1p66ed612t.us.auth0.com"
          clientId="QtF64wBF4myPYbtinVmXtrThDLxWOqha"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </ThemeProvider>
    </Provider>
);