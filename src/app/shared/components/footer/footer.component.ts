import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ImprintComponent } from '../../../imprint/imprint.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
