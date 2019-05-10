import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { __param } from 'tslib';
import { RecipeServiceService } from '../Services/recipe-service.service';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;

  constructor(private router: Router, private recipeService: RecipeServiceService, private route: ActivatedRoute) {
    this.recipe_in_progress = Recipe.createBlank();
    console.log(this.recipe_in_progress);
  }

  mode_access: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('recipe_id') != null) {
        console.log(params.get('recipe_id'));
        this.mode_access = 'MODIFICATION';
        this.recipeService.getRecipeById(parseInt(params.get('recipe_id'), 10)).subscribe((response) => {
          this.recipe_in_progress = response;
      });
    } else {
      this.mode_access = 'AJOUT';
      console.log('Good');
    }
  });
  }
  public updateRecipe(recipe: Recipe): void {
    this.recipeService.updateRecipe(recipe).subscribe((response) => {
      this.router.navigateByUrl('/recipes');
    }
   );
  }

  public addRecipe(recipe: Recipe): void {
    this.recipeService.createRecipe(recipe).subscribe((response) => {
      this.router.navigateByUrl('/recipes');
    }
   );
  }

  addIngredientPressed(): void {
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [ { ingredient: null, measure: null } ];
    } else {
      this.recipe_in_progress.ingredients.push( { ingredient: null, measure: null } );
    }
  }

  addInstructionPressed(): void {
    if (!this.recipe_in_progress.instructions) {
      this.recipe_in_progress.instructions = [ { instruction: null, photo: null } ];
    } else {
      this.recipe_in_progress.instructions.push( { instruction: null, photo: null } );
  }
}

public addUpdateRecipeClicked(): void {
  if (this.mode_access === 'MODIFICATION') {
    this.updateRecipe(this.recipe_in_progress);
  } else {
    this.addRecipe(this.recipe_in_progress);
  }
}

removeIngredientAtIndex(index): void {
  this.recipe_in_progress.ingredients.splice(index, 1);
}

removeInstructionAtIndex(index): void {
  this.recipe_in_progress.instructions.splice(index, 1);
}
}
