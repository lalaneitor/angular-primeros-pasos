import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

    @Input()
    public characterList: Character[] = [
      {
        name:'Trunks',
        power:10
      }
    ]

    @Output()
    public onDeletedId: EventEmitter<string> = new EventEmitter();


    onDeleteCharacter (id:string):void {
      console.group(id)
      this.onDeletedId.emit(id);
    }
}
