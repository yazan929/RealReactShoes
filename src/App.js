import logo from './logo.svg';
import Footer from "./Footer";
import Header from "./Header";
import Break from "./Break";


// function Popup(name) {
//   callTheName = () => {
//     alert("the name is" + name);
//   }

//   render() {
//     return (
//       <button onClick={this.callTheName}>Take the shot!</button>
//     );
//   }
// }





function App() {

  var shoesArray = [
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




  return (
    <div className="App">
      <Header />
      
      <body>

      <Break/>

        <div className="Shoes">
          <div className="innerShoe">
            {shoesArray.map(shoe => {
              return <>
                <div className={shoe.class} onClick={() => { alert("the name is " + (shoe.name)) }}>
                  <img src={shoe.photo} />
                </div>
              </>;
            })}
          </div>
        </div>
      </body>

      <Footer />

    </div>
  );
}

export default App;





/*
Todo next

make the nav bar work







*/