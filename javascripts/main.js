import tank from '../javascripts/components/tank.js';
import graveYard from './components/graveyard.js';
import personData from './helpers/data/personData.js';

const sharkAttackEvent = () => {
    // console.log('ouch');
    personData.randomMurder();
    tank.tankBuilder();
    graveYard.buildGraveYard();
};

const reviveEvent = (e) => {
    const personId = e.target.id;
    personData.bringToLife(personId);
    tank.tankBuilder();
    graveYard.buildGraveYard();
};

const init = () => {
    tank.tankBuilder();
    graveYard.buildGraveYard();
    $('#bite-me').click(sharkAttackEvent); // LEARN THIS JQUERY
    $('body').on('click', '.revive-btn', reviveEvent); // LEARN THIS ALSO JQUERY
};

init();

// dead to us:
// document-getElementById
//document.getElementByClassName
// document.ANYTHING
// .classList - add, remove, contains
// .addEventListener