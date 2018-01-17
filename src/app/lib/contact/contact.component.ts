import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', [Validators.required]],
      descripcion: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  save() {
    alert(JSON.stringify(this.form.value));
  }

}
