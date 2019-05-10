
import { Recipe } from '../../model/recipe';
import { EventEmitter, Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {

  @Input()
  recipe: Recipe;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  constructor() { }

  userClicked() {
    this.userClick.emit(this.recipe.id);
    console.log(this.recipe.id);
  }
}
