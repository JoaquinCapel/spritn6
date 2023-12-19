import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from '../panel/panel.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, ReactiveFormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {


  public formCheckbox!: FormGroup;
  public totalPrice = 0;

  constructor(
    private fb: FormBuilder,
  ) { }


  ngOnInit(): void {
    this.formCheckbox = this.fb.group({
      accept1: [false],
      accept2: [false],
      accept3: [false],
    });

    this.formCheckbox.valueChanges.subscribe(() => {
      this.getTotalPrice();
    });
  }

  getTotalPrice() {

    let totalPrice = 0;

    if (this.formCheckbox.get('accept1')?.value) {
      totalPrice += 300;
    }
    if (this.formCheckbox.get('accept2')?.value) {
      totalPrice += 400;
    }
    if (this.formCheckbox.get('accept3')?.value) {
      totalPrice += 500;
    }

    this.totalPrice = totalPrice
  }

  updateTotalPrice(event: number): void {

    this.totalPrice = this.formCheckbox.get('accept3')?.value ? 500 : 0;

    this.totalPrice += event;
  }

}
