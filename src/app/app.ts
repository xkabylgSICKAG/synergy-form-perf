import { Component, effect, signal, untracked } from '@angular/core';
import {
  SynInputComponent,
  SynOptionComponent,
  SynSelectComponent,
} from '@synergy-design-system/angular';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [
    SynSelectComponent,
    SynOptionComponent,
    SynInputComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly sections = signal([...Array(20).keys()].map((i) => ({ id: i })));
  protected readonly options = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];
  protected readonly form = signal<string | undefined>(undefined);
  private e = effect(() => {
    console.log('form value changed:', this.form());
    setTimeout(() => {
      this.sections.set([...Array(20).keys()].map((i) => ({ id: i })));
    }, 100);
  });
}
