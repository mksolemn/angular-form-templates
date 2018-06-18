import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'seo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listingForm: FormGroup;

  constructor(private fb: FormBuilder) {

    // To initialize FormGroup
    this.listingForm = fb.group({
      'Title' : [null, Validators.required]
    });

  }

  ngOnInit() {
  }


  onSubmit(form) {
    console.log(form);
  }

}

