import "react-perfect-scrollbar/dist/css/styles.css";
import { ThemeProvider } from "@material-ui/core";

import GlobalStyles from "./theme/GlobalStyles";
import theme from "./theme";
import AppRoutes from "./routes";
import AuthProvider from "./context/auth/context";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App
