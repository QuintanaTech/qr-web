import {css, StyleSheet} from "aphrodite";
import {Colors} from "@blueprintjs/core";
import Heading from "./components/Heading";
import {QueryClient} from "@tanstack/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import GenerateFormContainer from "./components/GenerateFormContainer";

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    backgroundColor: Colors.GRAY3,
    height: "100vh",
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
    paddingBottom: 20,
  },
  container: {
    width: 400,
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.WHITE,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const queryClient = new QueryClient();

function App() {
  return (
    <div className={css(styles.app)}>
      <div className={css(styles.container)}>
        <Heading />
        <QueryClientProvider client={queryClient}>
          <GenerateFormContainer />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
