import Footer from "./components/Footer";
import Header from "./components/Header";
import BreakPart from "./components/Break";
import ShoeList from "./components/ShoeList";
import {Shoes} from "./components/shoes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
const store = createStore(allReducers);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Shoes />

                <Header />

                <BreakPart />

                <ShoeList />

                <Footer />
            </div>
        </Provider>
    );
}

export default App;
