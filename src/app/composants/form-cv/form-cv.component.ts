import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCVComponent {
  cvForm: FormGroup;
  userList: User[] = [];

  constructor(private fb: FormBuilder) {
    
    this.cvForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(8)]],

      adresse: this.fb.group({
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        town: ['', Validators.required]
      }),

      skills: this.fb.array([]) 
    });
  }

 
  get skills(): FormArray {
    return this.cvForm.get('skills') as FormArray;
  }

  
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

 
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  
  addUser() {
    if (this.cvForm.valid) {
      const newUser: User = this.cvForm.value;
      this.userList.push(newUser);  
      this.cvForm.reset(); 
      this.skills.clear(); 
    }
  }
}
