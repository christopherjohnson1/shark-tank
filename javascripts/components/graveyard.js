import util from '../helpers/util.js'
import personData from '../helpers/data/personData.js'

const buildGraveYard = () => {
        const persons = personData.getDeadPersons();
        let domString = '';
        domString += '<div class="card">'
        domString += '<div class="card-header bg-danger">Graveyard</div>'
        domString += '<ul class="list-group list-group-flush">'
        
        persons.forEach((person) => {
        domString += `<li class="list-group-item">${person.name}</li>`;
        });
    
        domString += '</ul>'
        domString += '</div>'
       
        util.printToDom('graveyard', domString);
    };

export default { buildGraveYard };
