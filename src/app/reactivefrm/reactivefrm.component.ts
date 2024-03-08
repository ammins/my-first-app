import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefrm',
  templateUrl: './reactivefrm.component.html',
  styleUrls: ['./reactivefrm.component.css']
})
export class ReactivefrmComponent implements OnInit {
   viform:FormGroup;
   idTypeList:string[]=['NRC','Pass Port'];
  constructor(private frmBuilder:FormBuilder){
    this.CreateViForm();
  }

  ngOnInit(): void {

  }
public CreateViForm()
{
  this.viform=this.frmBuilder.group({
   fullName:['', Validators.required],
   age :new FormControl<Number>(0,[Validators.required,Validators.min(0),Validators.max(20)]),
   idType:['', Validators.required],
   idNo:['', Validators.required]


  });
}

validateControl(controlName: string) {
  const control = this.viform.get(controlName);
  return (control!.invalid && (control!.dirty || control!.touched)) || (control!.invalid);
}

onSubmit() {

console.log(this.viform.value);
}


onReset() {

  this.viform.reset({fullName:'',age:0,idType:'NRC',idNo:''});

}
}
