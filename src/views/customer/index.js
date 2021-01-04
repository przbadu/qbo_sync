import { useEffect, useContext } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { ActionCableConsumer } from "react-actioncable-provider";

import { CustomerContext } from "../../context/customers/context";
import Page from "../../components/Page";
import Results from "./Results";
import Toolbar from "./Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const CustomerListView = () => {
  const classes = useStyles();
  const context = useContext(CustomerContext);

  useEffect(() => {
    context.fetchCustomers();
  }, []);

  console.log(context.jobId, "jobid");

  return (
    <ActionCableConsumer
      channel={{ channel: "BackgroundJobChannel", room: context.jobId }}
      onReceived={context.updateProgress}
    >
      <Page className={classes.root} title="Customers">
        <Container maxWidth={false}>
          <Toolbar />
          <Box mt={3}>
            <Results />
          </Box>
        </Container>
      </Page>
    </ActionCableConsumer>
  );
};

export default CustomerListView;
