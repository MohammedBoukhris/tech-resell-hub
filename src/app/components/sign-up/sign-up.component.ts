import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.less'
})
export class SignUpComponent {

    email: string = '';
    password: string = '';


  constructor() {
    console.log('SignUpComponent constructor');
  }

  ngOnInit() {
    console.log('SignUpComponent ngOnInit');
  }

  signUp() {
    console.log('SignUpComponent signUp', this.email, this.password);
  }

  logMessage() {
  console.log('Button was clicked!');
}

}
