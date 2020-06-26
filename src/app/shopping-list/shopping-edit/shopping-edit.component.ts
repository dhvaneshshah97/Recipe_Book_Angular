import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') valueOfNameInput: ElementRef;
  @ViewChild('amountInput') valueofAmountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addToIngredients() {
    const ingName = this.valueOfNameInput.nativeElement.value;
    const ingAmount = this.valueofAmountInput.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount); 
    this.newIngredient.emit(ingredient);    
  }

  clearForm() {
    this.valueOfNameInput.nativeElement.value = "";
    this.valueofAmountInput.nativeElement.value = "";
  }
}
