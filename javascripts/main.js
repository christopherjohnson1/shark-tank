import tank from '../javascripts/components/tank.js'
import graveYard from './components/graveyard.js'

const init = () => {
    tank.tankBuilder();
    graveYard.buildGraveYard();
};

init();

// dead to us:
// document-getElementById
//document.getElementByClassName
// document.ANYTHING
// .classList - add, remove, contains
// .addEventListener