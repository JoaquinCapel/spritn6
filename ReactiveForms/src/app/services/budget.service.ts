import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  calculatePagesPrice(numberPages: number, numberLanguages: number): number {
    return numberPages * numberLanguages * 30;
  }
}


