import { Component, OnInit } from '@angular/core';
// import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { DemoService } from '../../Services/demo.service';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  // userForm !:FormGroup;

  // constructor(private fb:FormBuilder, private demoService:DemoService){}
  
  // ngOnInit(): void {
  //   this.userForm=this.fb.group({
  //     name:['',Validators.required],
  //     email:['',Validators.required,Validators.email],
  //     password:['',Validators.required, Validators.minLength(6)]
  //   })
 
  // }

  // onSubmit():void{
  //   if(this.userForm.valid){
  //     console.log('Form Data',this.userForm.value);
  //     this.demoService.saveUser(this.userForm.value).subscribe(response=>{
  //       console.log("User Svaed", response);
  //       alert("user saved");
  //       this.userForm.reset();
  //     })
  //   }else{
  //     alert("form is invalid");
  //     this.userForm.markAllAsTouched();
  //   }
  // }

}
