import "react-perfect-scrollbar/dist/css/styles.css";
import { ThemeProvider } from "@material-ui/core";
import ActionCable from "actioncable";
import { ActionCableProvider } from "react-actioncable-provider";

import GlobalStyles from "./theme/GlobalStyles";
import theme from "./theme";
import AppRoutes from "./routes";
import AuthProvider from "./context/auth/context";
import CustomerProvider from "./context/customers/context";
import { WS_URL } from "./utils/constants";

const cable = ActionCable.createConsumer(WS_URL);

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ActionCableProvider cable={cable}>
          <CustomerProvider>
            <GlobalStyles />
            <AppRoutes />
          </CustomerProvider>
        </ActionCableProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
