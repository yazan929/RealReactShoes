import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {

  var shoesArray = [
    {
      photo: "photos/men1.jpg",
      class: "Mshoes",
      name: "shoe1",
    },
    {
      photo: "photos/men2.jpg",
      class: "Mshoes",
      name: "shoe2",
    },
    {
      photo: "photos/men3.jpg",
      class: "Mshoes",
      name: "shoe3",
    },
    {
      photo: "photos/men4.jpg",
      class: "Mshoes",
      name: "shoe4",
    },
    {
      photo: "photos/men5.jpg",
      class: "Mshoes",
      name: "shoe5",
    },
    {
      photo: "photos/men6.jpg",
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
      <header>
        <div className="navBar">
          <div><a href="#">Men</a></div>
          <div><a href="#">Women</a></div>
          <div><a href="#">Kids</a></div>
          <div><a href="#">About Us</a></div>
        </div>
      </header>
      <body>

        <div className="break" >
          <img src="photos/greenshoesz.jpg" alt="new" />
        </div>
        <div className="Shoes">
          <div className="innerShoe">
            {shoesArray.map(shoe => {
              return <>
                <div className={shoe.class}>
                  <img src={shoe.photo} />
                </div>
              </>;
            })}
          </div>
        </div>
      </body>

      <footer>
        <div className="footer">
          <div className="row">
            <table className="iconsTable">
              <tbody>
                <tr>
                  <td><FontAwesomeIcon icon={faMobile} /></td>
                  <td>0108904693</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faEnvelope} /></td>
                  <td>yazanq95@hotmail.com</td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLocationArrow} /></td>
                  <td>Penang Island - Malaysia</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <table className="iconsTable">
              <tbody>
                <tr>
                  <td><FontAwesomeIcon icon={faGithub} /></td>
                  <td> <a href="https://github.com/yazan929">GitHub</a></td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faLinkedin} /></td>
                  <td><a
                    href="https://www.linkedin.com/in/yazan-qawasmeh-4108b2173/">LinkedIn</a></td>
                </tr>
                <tr>
                  <td><FontAwesomeIcon icon={faCodepen} /></td>
                  <td><a href="https://codepen.io/yazan929">CodePen</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
