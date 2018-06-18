# Angular 6 with Angular material 6

Ready to use Angular form templates. Easily customizable Angular form templates.

## Using the tutorial

![alt text](https://github.com/mksolemn/angular-universal-seo-with-firestore/blob/master/src/assets/img/sanity-check.jpg "Sanity check") - this indicates sanity check alert, when you see this, it's time compile the code and check for any errors

If at any point you're unable to follow the tutorial, please comment or contact me, I'll update the tutorial with any necessary changes.


## Generate Angular project

Generate new project as you please, but keeping these settings will make it easier to follow, but they're not required.
```
$ ng new angular-form-presets --prefix=seo --style=scss
```

1. Generate new project called "universal-seo": ng new universal-seo
2. Change application prefix to "seo": --prefix=seo
3. Use scss for styles: --style=scss


## Adding Angular material, Angular CDK & Animations

Styling forms, including all the cases for error reporting can be tedious, best is to use library like Angular material to
take care of the styling part and customize desired aspects.

```
$ npm install --save @angular/material @angular/cdk
```

Some Angular material designs require Angular animations module to function properly. We'll need package for that too.

```
$ npm install --save @angular/animations
```

Add modules to main app module.

[app.module.ts](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.module.ts)
```javascript
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
```

For Angular 6 cli, you can use new command to generate module.

```
ng add @angular/material
```



## Add Angular material components for form & Angular Reactive form

You can find full list of available Angular material elements [HERE](https://material.angular.io/components/categories)

#1. Add angular material form field to [app.module.ts](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.module.ts)

```javascript
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule, MatInputModule} from '@angular/material';

  imports: [
    ...
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatFormFieldModule
  ]
```

You can read more about Angular material setup [HERE](https://material.angular.io/guide/getting-started)

I'm also adding MatCardModule & MatCardContent modules for styling, you may omit these if you want to focus on main form elements (inputs,checkboxes), since I'm using these 2 modules to style the container for for fields.

## Add gesture support - Hammer.js - [NOT MANDATORY FOR NOW]

This is pretty important if you want your app to work properly with mobile devices. I find especially useful for slider and galleries.
This will walk you through step by step [how to get Hammer.js working on your project](https://github.com/mksolemn/Angular5-ready-to-use-components).
I suggest using that tutorial since it deals with pitfall of unwanted gesture actions e.g. scrolling instead of invoking action on gallery element.

## Create first material form input element
[app.component.html](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.component.html)
```html
  <form class="listing form" (ngSubmit)="onSubmit(listingForm.value)">
    <mat-form-field>
      <input formControlName="Title" matInput placeholder="Title">
    </mat-form-field>
  </form>
```

### Add submit button for form element
I will omit these imports later on in the tutorial, so keep in mind that you will need to import each new material element to [app.module.ts](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.module.ts)

[app.module.ts](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.module.ts)
```
import {MatButtonModule, ...} from '@angular/material';
  imports: [
    ...
    MatButtonModule,
    ...
  ],
    exports: [
      ...
      MatButtonModule
    ],
```

[app.component.html](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.component.html)
```html
<form>
...
<button mat-raised-button color="accent">Submit</button>
</form>
```

Angular Material has [preset button styles](https://material.angular.io/components/button/overview):
 + mat-button
 + mat-raised-button
 + mat-stroked-button
 + mat-icon-button
 + mat-fab
 + mat-mini-fab

## Add reactive form functionality for form element

[app.module.ts](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.module.ts)
```javascript
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

  imports: [
    ...
    FormsModule,
    ReactiveFormsModule
```

Make sure you have the necessary modules to build form imported.

[app.component.ts](https://github.com/mksolemn/angular-form-templates/blob/master/src/app/app.component.ts)
```javascript
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
  
  onSubmit() {
    console.log(this.listingForm.value);
  }
}
```

Since we already have form instance listingForm available, we don't need to pass anything to the form. On click you can simply pass on form values to wherever you need, I will cover how to pass value to service and handle form on firestore in future tutorial.

### Test project ![alt text](https://github.com/mksolemn/angular-universal-seo-with-firestore/blob/master/src/assets/img/sanity-check.jpg "Sanity check")
Make sure everything is working correctly at this point and you're able to submit form. In console log you can check values that your form has submitted.
This is how our form will look at most basic level, you may want to take snapshot for this one, as in upcoming sections we'll populating card with more and various types of inputs and will add error message handling using Angular material elements.
