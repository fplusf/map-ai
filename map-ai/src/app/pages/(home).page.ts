import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'map-ai-home',
  
  imports: [AnalogWelcomeComponent],
  template: `
     <map-ai-analog-welcome/>
  `,
})
export default class HomeComponent {
}
