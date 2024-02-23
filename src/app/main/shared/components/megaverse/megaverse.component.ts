import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-megaverse',
  templateUrl: './megaverse.component.html',
  styleUrls: ['./megaverse.component.scss']
})
export class MegaverseComponent {
  @Input() megaverse: string[][] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
