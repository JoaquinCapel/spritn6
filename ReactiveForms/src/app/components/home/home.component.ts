import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public myForm: FormGroup = this.fb.group({
    accept1: [false],
    accept2: [false],
    accept3: [false],
  }
  )
  constructor(private fb: FormBuilder) { }

  getTotalPrice() {

    let totalPrice = 0;

    if (this.myForm.get('accept1')?.value) {
      totalPrice += 300;
    }
    if (this.myForm.get('accept2')?.value) {
      totalPrice += 400;
    }
    if (this.myForm.get('accept3')?.value) {
      totalPrice += 500;
    }
    return totalPrice;
  }
}
