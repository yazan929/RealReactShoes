import Footer from "./Footer";
import Header from "./Header";
import BreakPart from "./Break";
import ShoeList from "./ShoeList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";

const store = createStore(allReducers);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />

                <BreakPart />

                <ShoeList />

                <Footer />
            </div>
        </Provider>
    );
}

export default App;
