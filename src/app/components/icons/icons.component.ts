import { Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matArrowBackIos,
  matArrowForwardIos,
  matImportExport,
  matLaunch,
} from '@ng-icons/material-icons/baseline';
import {
  ionBookmarkOutline,
  ionEye,
  ionHeart,
  ionHeartOutline,
  ionNotificationsOutline,
} from '@ng-icons/ionicons';
import { heroArrowDownTray } from '@ng-icons/heroicons/outline';
import { ClickAnimateDirective } from '../../directives/click-animation.directive';

type IIcon =
  | 'matArrowForwardIos'
  | 'matArrowBackIos'
  | 'ionEye'
  | 'ionHeart'
  | 'ionHeartOutline'
  | 'ionBookmarkOutline'
  | 'ionNotificationsOutline'
  | 'heroArrowDownTray'
  | 'matLaunch'
  | 'matImportExport';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [NgIconComponent, ClickAnimateDirective],
  viewProviders: [
    provideIcons({
      matArrowForwardIos,
      matArrowBackIos,
      ionEye,
      ionHeart,
      ionHeartOutline,
      ionBookmarkOutline,
      ionNotificationsOutline,
      heroArrowDownTray,
      matLaunch,
      matImportExport,
    }),
  ],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss',
})
export class IconsComponent {
  className = input<string>();
  color = input<string>();
  name = input.required<IIcon>();
}
