import Footer from './Footer';
import Header from './Header';
import BreakPart from './Break';
import ShoeList from './ShoeList';
import {createStore} from "redux";
import {Provider} from "react-redux";

function reducer(){
  return{
    shoesArray : [
      {
          photo: "photos/Men1.jpg",
          class: "Mshoes",
          name: "shoe1",
      },
      {
          photo: "photos/Men2.jpg",
          class: "Mshoes",
          name: "shoe2",
      },
      {
          photo: "photos/Men3.jpg",
          class: "Mshoes",
          name: "shoe3",
      },
      {
          photo: "photos/Men4.jpg",
          class: "Mshoes",
          name: "shoe4",
      },
      {
          photo: "photos/Men5.jpg",
          class: "Mshoes",
          name: "shoe5",
      },
      {
          photo: "photos/Men6.jpg",
          class: "Mshoes",
          name: "shoe6",
      },
      {
          photo: "photos/women1.jpg",
          class: "WShoes",
          name: "shoe7",
      },
      {
          photo: "photos/women2.jpg",
          class: "WShoes",
          name: "shoe8",
      },
      {
          photo: "photos/women3.jpg",
          class: "WShoes",
          name: "shoe9",
      },
      {
          photo: "photos/women4.jpg",
          class: "WShoes",
          name: "shoe10",
      },
      {
          photo: "photos/women5.jpg",
          class: "WShoes",
          name: "shoe11",
      },
      {
          photo: "photos/women6.jpg",
          class: "WShoes",
          name: "shoe12",
      },
      {
          photo: "photos/Kids1.jpg",
          class: "KShoes",
          name: "shoe13",
      },
      {
          photo: "photos/Kids2.jpg",
          class: "KShoes",
          name: "shoe14",
      },
      {
          photo: "photos/Kids3.jpg",
          class: "KShoes",
          name: "shoe15",
      },
      {
          photo: "photos/Kids4.jpg",
          class: "KShoes",
          name: "shoe16",
      },
      {
          photo: "photos/Kids5.jpg",
          class: "KShoes",
          name: "shoe17",
      },
      {
          photo: "photos/Kids6.jpg",
          class: "KShoes",
          name: "shoe18",
      },

  ]
  };
}
const store = createStore(reducer);

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


