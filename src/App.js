import "react-perfect-scrollbar/dist/css/styles.css";
import { ThemeProvider } from "@material-ui/core";

import GlobalStyles from "./theme/GlobalStyles";
import theme from "./theme";
import AppRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App
