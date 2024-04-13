import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lucideAlertCircle, lucideInfo } from '@ng-icons/lucide';
import { HlmAlertImports, HlmButtonDirective, provideIcons } from 'unicon-ng';
import { HlmAccordionImports } from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HlmButtonDirective,
    HlmAccordionImports,
    HlmAlertImports,
    HlmIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideIcons({ lucideInfo, lucideAlertCircle })],
})
export class AppComponent {
  title = 'test-cli';
}
