import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { WaircSplitButtonComponent } from './buttons/split-button/split-button.component';
import { WaircButtonVariant, WaircSplitButtonOption } from './buttons/split-button/types';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ThemePalette } from '@angular/material/core';
import { WaircFileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    WaircSplitButtonComponent,
    WaircFileUploadComponent,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  template: `
  <h2>Demo - Split button</h2>
    <div style="display: inline-flex; flex-direction: column; gap: 10px;">
      <mat-button-toggle-group [(ngModel)]="selectedVariant">
        <mat-button-toggle value="text">Text</mat-button-toggle>
        <mat-button-toggle value="elevated">Elevated</mat-button-toggle>
        <mat-button-toggle value="filled">Filled</mat-button-toggle>
        <mat-button-toggle value="outlined">Outlined</mat-button-toggle>
      </mat-button-toggle-group>
      <mat-button-toggle-group [(ngModel)]="selectedTheme">
        <mat-button-toggle value="primary">Primary</mat-button-toggle>
        <mat-button-toggle value="accent">Accent</mat-button-toggle>
        <mat-button-toggle value="default">Default</mat-button-toggle>
      </mat-button-toggle-group>
      <mat-slide-toggle [(ngModel)]="isChecked">Disabled</mat-slide-toggle>
      <mat-slide-toggle #customIcon>Icon</mat-slide-toggle>
      <mat-slide-toggle #customButton>Customise button</mat-slide-toggle>      
      <mat-slide-toggle #customDropdownToggle>Customise dropdown</mat-slide-toggle>
      <mat-slide-toggle #customIconToggle>Customise icon</mat-slide-toggle>
      <mat-slide-toggle #customMenuToggle>Customise menu</mat-slide-toggle>
      Button label<input [(ngModel)]="buttonText" label="label" />
    </div>
    
    <br>
    <br>

    <wairc-split-button
      [variant]="selectedVariant"
      [theme]="selectedTheme"
      [text]="buttonText"
      [disabled]="isChecked"
      [options]="options"      
      icon="{{customIcon.checked ? icon : ''}}"
      buttonClass="{{customButton.checked ? customButtonClass : ''}}"
      dropdownClass="{{customDropdownToggle.checked ? customDropdownClass : ''}}"
      iconClass="{{customIconToggle.checked ? customIconClass : ''}}"
      menuClass="{{customMenuToggle.checked ? customMenuClass : ''}}"
      (buttonClick)="buttonClick()"
    >
    </wairc-split-button>

    <h2>Demo - File upload</h2>

    <wairc-file-upload>


    </wairc-file-upload>


  `
})
export class App {
  buttonText = 'Save and close'
  selectedVariant: WaircButtonVariant = 'outlined';
  selectedTheme: ThemePalette = 'primary';
  isChecked = false;
  icon = 'save';
  customIconClass = 'sbic';
  customButtonClass = 'custom-button-class'
  customDropdownClass = 'custom-dropdown-class'
  customMenuClass = 'custom-menu-class'
  name = 'Angular';

  options: Array<WaircSplitButtonOption> = [
    {
      label: 'Option 1',
      icon: 'save',
      click: () => alert('Option 1 clicked'),
    },
    {
      label: 'Option 2',
      icon: 'save',
      click: () => alert('Open 2 clicked'),
    },
    {
      label: 'Disabled Option',
      icon: 'save',
      disabled: true,
      click: () => alert('Open 2 clicked'),
    },
  ];
 
  buttonClick = (): void => alert('Main button clicked');
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
}).catch((err) => console.error(err));
