import Footer from "./components/Footer";
import Header from "./components/Header";
import BreakPart from "./components/Break";
import ShoeList from "./components/ShoeList";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
    return (
        <Provider store={store}>
            <div>
                <Header />

                <BreakPart />
                
                <ShoeList />

                <Footer />
            </div>
        </Provider>
    );
}

export default App;
