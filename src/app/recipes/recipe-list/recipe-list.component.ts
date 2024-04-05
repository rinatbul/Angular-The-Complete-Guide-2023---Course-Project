import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1','This is simply a test','https://www.chewoutloud.com/wp-content/uploads/2017/06/easy-lemon-butter-fish-0.jpg'),
    new Recipe('A Test Recipe2','This is simply a test2','https://www.chewoutloud.com/wp-content/uploads/2017/06/easy-lemon-butter-fish-0.jpg')
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
