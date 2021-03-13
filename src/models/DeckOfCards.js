import * as _ from 'lodash';
import ListOfTopics from './ListOfTopics';
const NUMBER_OF_CARDS = 20;


function deckOfCards(){
    const deck =[];

    while(deck.length<NUMBER_OF_CARDS){
        const index  = Math.floor(Math.random()*ListOfTopics.length);
        const card ={
            topic: ListOfTopics.splice(index,1),
            wasGuessed: false,
        }

        deck.push(card);
        deck.push({...card});
    }
    
    return _.shuffle(deck);
};

export default deckOfCards;