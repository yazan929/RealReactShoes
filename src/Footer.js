import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

class Footer extends React.Component {
  render() {
    return (<footer>
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
                <td> <a href='https://github.com/yazan929'>GitHub</a></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faLinkedin} /></td>
                <td><a
                  href='https://www.linkedin.com/in/yazan-qawasmeh-4108b2173/'>LinkedIn</a></td>
              </tr>
              <tr>
                <td><FontAwesomeIcon icon={faCodepen} /></td>
                <td><a href='https://codepen.io/yazan929'>CodePen</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </footer>);
  }
}


export default Footer;