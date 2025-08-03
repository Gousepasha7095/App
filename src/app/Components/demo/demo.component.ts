import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { DemoService, User } from '../../Services/demo.service';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges {

  @Input() name: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("mg on chasnges called")
    if (changes[this.name]) {
      const p = changes[this.name].previousValue;
      const c = changes[this.name].currentValue;
      console.log(`Name changed from "${p}" to "${c}"`);
    }
  }
  //   user:User={name:'',email:''};
  //   users: User[]=[];
  //   isEditMode=false;

  //   page: number = 1;  
  //   size: number = 10;


  // constructor(private demoService:DemoService){}


  //   ngOnInit(): void {
  //   this.getAllUsers();
  //   }

  //  getAllUsers():void{
  //   this.demoService.getAllUser().subscribe({
  //     next:(data)=>{
  //       this.users=data;
  //       console.log("data loaded");
  //     },
  //     error:(err)=>{
  //       console.log(" failed data loaded", err);
  //       alert("failed to load data");
  //     }
  //   });
  //  }

  //   editUser(user:User):void{
  //     this.user={...user};
  //     this.isEditMode=true;
  //   }
  // onSubmit():void{
  //   if(this.isEditMode && this.user.id){
  //     this.demoService.updateUser(this.user.id,this.user).subscribe({
  //       next:(res)=>{
  //         console.log("User uppdated", res);
  //         alert("User updated");
  //         this.getAllUsers();
  //         this.resetForm();
  //       },
  //       error:()=>{
  //         alert("failed uppdated");
  //       }
  //     });
  //   }else{
  //     this.demoService.createUser(this.user).subscribe({
  //        next:(response)=>{
  //         console.log("User created", response);
  //         alert("user created");
  //         this.getAllUsers();
  //         this.resetForm();
  //        },
  //        error:(err)=>{
  //         console.log("failed to created", err);
  //         alert("failed creating user");
  //        }
  //     });
  //   }
  // }

  // resetForm(){
  //   this.user={name:'',email:''};
  //   this.isEditMode=false;
  // }

  // nextPage(){
  // this.page++;
  // this.getAllUsers();
  // }
  // getAllUser():void{
  //   const queryParams={page:this.page,size:this.size};
  //   this.demoService.getAllUsers(queryParams).subscribe({
  //     next: (data) => {
  //       this.users = data;
  //       console.log("Data loaded", data);
  //     },
  //     error: (err) => {
  //       console.error("Error loading data", err);
  //       alert("Failed to load data");
  //     }
  //   });
  // }
}