import { createRoot } from "react-dom/client";
import store from "./store/Store";
import { Provider } from "react-redux";
import HomeContainer from "./container/HomeContainer";
import './components/App.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <HomeContainer />
  </Provider>
);
