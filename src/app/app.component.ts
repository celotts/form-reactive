import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-reactive';
  constructor(private formBuilder: FormBuilder) { }

  formReactive = this.formBuilder.group({
    nombre: [''],
    apellido: ['', Validators.required],
    dirección: ['', Validators.required],
    direccion2: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    ciudad: ['', Validators.required],
    estado: ['', Validators.required],
    zip: ['', Validators.required],
    checkMe: ['', Validators.required],
  });

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formReactive.controls.nombre.setValue('Carlos E. Lott');
    this.formReactive.controls.apellido.setValue('Carlos E. Lott')
  }
}
