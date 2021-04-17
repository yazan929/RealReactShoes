import Footer from "./components/Footer";
import Header from "./components/Header";
import BreakPart from "./components/Break";
import AboutUs from "./components/aboutus/Aboutus";
import WriteReview from "./components/writereview/WriteReview";
import AddShoe from "./components/addShoes/AddShoe";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/addshoe" component={AddShoe} />
                        <Route path="/review" component={WriteReview} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/buyshoes" component={BreakPart} />
                        <Route path="/" exact component={BreakPart} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
