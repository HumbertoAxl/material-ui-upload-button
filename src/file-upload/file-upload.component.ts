import {
  NgClass,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
} from '@angular/common';
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
import { WaircUploadStatus, WaircFileUpload } from './types';



@Component({
  selector: 'wairc-file-upload',
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
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaircFileUploadComponent { 

  files: WaircFileUpload[] = [
    {
      filename: 'A silly__filename',
      ext: 'txt',
      status: 'pending',
    } as WaircFileUpload,
    {
      filename: 'A silly__filename_two',
      ext: 'pdf',
      status: 'pending',
    } as WaircFileUpload,
    {
      filename: 'A silly__filename_three',
      ext: 'jpg',
      status: 'pending',
    } as WaircFileUpload,
  ];

  fakeUpload(): void {
    this.files = [];
  }

  onFileSelected($event: any): void {}
}
