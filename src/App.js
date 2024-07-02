import "./App.css";
import Accordion from "./components/accordion";
import TabComponent from "./components/custom-tabs/tab-component";
import FeatureFlags from "./components/feature-flags";
import FeatureFlagGlobalState from "./components/feature-flags/context";
import GitHubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import ModalComponent from "./components/modal-popup/modal-component";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToSection from "./components/scroll-to-section";
import SearchAutoComplete from "./components/search-auto-complete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import TestUseFetchHook from "./components/use-fetch/test-use-fetch-hook";
import TestUseOutsideClick from "./components/use-outside-click/test-use-outside-click";
import TestUseWindowResizeHook from "./components/use-window-resize-hook/test-use-window-resize-hook";
import Weather from "./components/weather-info/weather";
import ScrollToTopOrBottom from "./scroll-top-bottom";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating numOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} page={1} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products"} limit={100} /> */}
      {/* <TabComponent /> */}
      {/* <ModalComponent /> */}
      {/* <GitHubProfileFinder /> */}
      {/* <SearchAutoComplete /> */}
      {/* <TicTacToe /> */}

      {/*
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
      */}

      {/* <TestUseFetchHook /> */}
      {/* <TestUseOutsideClickHook /> */}
      {/* <TestUseWindowResizeHook /> */}
      {/* <ScrollToTopOrBottom /> */}
      {/* <ScrollToSection />  */}
      <Weather />
    </div>
  );
}

export default App;
