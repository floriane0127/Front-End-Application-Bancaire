import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeSummaryComponent } from './components/recipe-summary/recipe-summary.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { FormsModule } from '@angular/forms';
import { EditNewRecipeComponent } from './edit-new-recipe/edit-new-recipe.component';
import { RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipeSummaryComponent,
    RecipeListComponent,
    EditNewRecipeComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'editnewrecipe/:recipe_id',
        component: EditNewRecipeComponent
      },
      {
        path: 'editnewrecipe',
        component: EditNewRecipeComponent
      },
      {
        path: 'recipes',
        component: RecipeListComponent
      },
      {
        path: 'recipes/:recipe_id',
        component: RecipeDetailsComponent
      },
      {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
