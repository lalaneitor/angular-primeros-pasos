import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public characters:Character[] = [
        {
            id: uuid(),
            name:'Krillin', 
            power: 50
        },
        {
            id: uuid(),
            name:'Goku',
            power:10000
        },
        {
            id: uuid(),
            name:'Vegeta',
            power:7500
        },
        {
            id: uuid(),
            name:'Bulma',
            power:10
        }
    ]

    onNewCharacter (character:Character):void{
        const newCharacter:Character = {...character, id:uuid()}
        this.characters.push(character)
    }

    onDeleteCharacter (id:string):void {
        this.characters = this.characters.filter(character => character.id !== id);    
    }
}