import * as _ from 'lodash';
import ListOfEffects from './ListOfEffect';
import ListOfTopics from './ListOfTopics';
const NUMBER_OF_CARDS = 20;

export default ()=>{
    const deck =[];

    while(deck.length<NUMBER_OF_CARDS){
        const index  = Math.floor(Math.random()*ListOfTopics.length);
        const indexEffect = Math.floor(Math.random()*ListOfEffects.length);
        const card ={
            topic: ListOfTopics.splice(index,1),
            effect: ListOfEffects.splice(indexEffect,1)
        }

        deck.push(card);
        deck.push({...card});
    }
    
    return _.shuffle(deck);
};