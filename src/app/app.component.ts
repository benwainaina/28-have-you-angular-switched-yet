import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

type TCardFace = 'front' | 'back';
type TCardMode = 'basic' | 'student' | 'advanced' | 'premium';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public activeFace: TCardFace = 'front';
  public selectedBackContent: FormControl<TCardMode | null> =
    new FormControl<TCardMode>('premium');

  public onCardFaceChange(face: TCardFace): void {
    this.activeFace = face;
  }
}
