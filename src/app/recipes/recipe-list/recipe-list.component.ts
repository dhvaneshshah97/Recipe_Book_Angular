import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'a description for recipe','https://www.wholesomeyum.com/wp-content/uploads/2019/09/wholesomeyum-keto-chaffles-recipe-sweet-savory-5-ways-24.jpg'),
    new Recipe('Cold Coco', 'A recipe to make a cold coco', 'https://lh3.googleusercontent.com/proxy/iqZ7poYwzp0ZxbpXRVJfHlBlaCsfkF3XBlslSvQObRcki83vPBNRQAfylJrQkCq2ujvtSXXWsgokBhMpw3YWaZ39p60T3RhKYsY2PBNJo3yk5gENCkg4kcB082k')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
