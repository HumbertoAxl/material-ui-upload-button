import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { WaircButtonVariant, WaircSplitButtonOption } from './types';

@Component({
  selector: 'wairc-split-button',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgTemplateOutlet,
  ],
  templateUrl: './split-button.component.html',  
  styleUrls: ['./split-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaircSplitButtonComponent {
  private _variant: WaircButtonVariant = 'text';
  private _theme: ThemePalette | undefined;
  private _disabled = false;
  private _icon = '';
  private _buttonClass = '';
  private _dropdownClass = '';
  private _menuClass = '';
  private _iconClass = '';
  private _text = '';
  private _options: WaircSplitButtonOption[] = [];

  /**
   * The button variant. Defaults to text.
   */
  @Input()
  get variant(): WaircButtonVariant {
    return this._variant;
  }
  set variant(variant: WaircButtonVariant) {
    this._variant = variant;
  }

  /**
   * The button Material theme. Defaults to no theme.
   */
  @Input()
  get theme(): ThemePalette {
    return this._theme;
  }
  set theme(theme: ThemePalette) {
    this._theme = theme;
  }

  /**
   * Disables the button.
   */
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(isDisabled: boolean) {
    this._disabled = isDisabled;
  }

  /**
   * Adds an icon prefix to the button.
   */
  @Input()
  get icon(): string {
    return this._icon;
  }
  set icon(icon: string) {
    this._icon = icon;
  }

  /**
   * Changes the appearance of the button.
   */
  @Input()
  get buttonClass(): string {
    return this._buttonClass;
  }
  set buttonClass(buttonClass: string) {
    this._buttonClass = buttonClass;
  }

  /**
   * Changes the appearance of the icon prefix.
   */
  @Input()
  get iconClass() {
    return this._iconClass;
  }
  set iconClass(iconClass: string) {
    this._iconClass = iconClass;
  }

  /**
   * Changes the appearance of the dropdown button.
   */
  @Input()
  get dropdownClass(): string {
    return this._dropdownClass;
  }
  set dropdownClass(dropdownClass: string) {
    this._dropdownClass = dropdownClass;
  }

  /**
   * Changes the appearance of the splitbutton menu.
   */
  @Input()
  get menuClass(): string {
    return this._menuClass;
  }
  set menuClass(menuClass: string) {
    this._menuClass = menuClass;
  }

  /**
   * Configures the button label.
   */
  @Input()
  get text(): string {
    return this._text;
  }
  set text(text: string) {
    this._text = text;
  }

  /**
   * Configures the splitbutton menu options.
   */
  @Input()
  get options() {
    return this._options;
  }
  set options(options: WaircSplitButtonOption[]) {
    this._options = options;
  }

  /**
   * Emitted when the button is clicked.
   */
  @Output() buttonClick = new EventEmitter<void>();
  handleButtonClick = () => this.buttonClick.emit();

}
