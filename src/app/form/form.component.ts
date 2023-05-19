import { Component } from '@angular/core';
import { user } from '../model/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user:user=new user();
  save(f:NgForm){
    this.user=f.value;
    this.user.email=f.value['email'];
    this.user.password=f.value['password'];
    console.log(this.user);
  }
}
