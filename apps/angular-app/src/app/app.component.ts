import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { add } from '@company/browser-package';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-app';
	constructor() {
		console.log(add(1, 1));
	}
}
