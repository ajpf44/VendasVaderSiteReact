import { CartProvider } from "./contexts/CartContext";

import { AppThemeProvider } from "./contexts/ThemeContext";
import SessionContextProvider from "./contexts/SessionContext";

import SiteRouter from "./Router";

const App = () => {
  return (
    <AppThemeProvider>
      <SessionContextProvider>
        <CartProvider>
          <SiteRouter />
        </CartProvider>
      </SessionContextProvider>
    </AppThemeProvider>
  );
};

export default App;
