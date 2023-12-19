import { Component, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { EventEmitter } from '@angular/core';
import { NgbdModalOptions } from '../shared/modal/modal.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule, NgbdModalOptions],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {

  @Output() pagesPrice = new EventEmitter<number>();


  public formPanel: FormGroup = this.fb.group({
    numberPages: [1, [Validators.required, Validators.min(1)]],
    numberLanguages: [1, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    public budgetService: BudgetService,

  ) { }

  public totalPages: number = 0;
  public totalLanguages: number = 0;

  minusPages() {
    const currentPages = this.formPanel.get('numberPages')?.value;
    this.formPanel.get('numberPages')?.setValue(Math.max(currentPages - 1, 1));
  }

  plusPages() {
    const currentPages = this.formPanel.get('numberPages')?.value;
    this.formPanel.get('numberPages')?.setValue(currentPages + 1);
  }

  minusLanguages() {
    const currentLanguages = this.formPanel.get('numberLanguages')?.value;
    this.formPanel.get('numberLanguages')?.setValue(Math.max(currentLanguages - 1, 1));
  }

  plusLanguages() {
    const currentLanguages = this.formPanel.get('numberLanguages')?.value;
    this.formPanel.get('numberLanguages')?.setValue(currentLanguages + 1);
  }

  ngOnInit() {
    this.formPanel.valueChanges.subscribe((values) => {
      this.totalPages = values.numberPages;
      this.totalLanguages = values.numberLanguages;
    })
  }

  get numberPages(){
    return this.formPanel.get('numberPages');
  }

  get numberLanguages(){
    return this.formPanel.get('numberLanguages');
  }

  calculate(): number {
    const pages = this.formPanel.get('numberPages')?.value;
    const languages = this.formPanel.get('numberLanguages')?.value;
    const calculated = this.budgetService.calculatePagesPrice(pages, languages);
    console.log(pages, languages, calculated);

    this.pagesPrice.emit(calculated);

    return calculated
  }

}
