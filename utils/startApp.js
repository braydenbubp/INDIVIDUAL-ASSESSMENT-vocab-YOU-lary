import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import domEvents from '../components/events/domEvents';
import navigationEvents from '../components/events/navEvents';
import domBuilder from '../components/shared/domBuilder';
// import formEvents from '../events/formEvents';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // TODO: Put all books on the DOM on App load
  getVocab(user.uid).then((books) => showVocab(books));
};

export default startApp;
