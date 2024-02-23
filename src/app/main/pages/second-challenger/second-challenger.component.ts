import { Component, OnInit } from '@angular/core';
import { MetaverseService } from '../../services/metaverse.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-second-challenger',
  templateUrl: './second-challenger.component.html',
  styleUrls: ['./second-challenger.component.scss']
})
export class SecondChallengerComponent implements OnInit {
  candidateCode = '949bdc98-9b16-4baa-9389-2855a1cfe0f1';
  megaverse: any;

  constructor(private metaverseService: MetaverseService) {}
  ngOnInit(){
     this.metaverseService.httpGetMatrix(this.candidateCode).pipe(map((matrix: any) => {
      this.megaverse = matrix.goal
    })).subscribe();
  }

  async actionCreate() {
    const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
    const requestDelay = 2000;

    for (let rowIndex = 0; rowIndex < this.megaverse.length; rowIndex++) {
        for (let columnIndex = 0; columnIndex < this.megaverse[rowIndex].length; columnIndex++) {
            const cell = this.megaverse[rowIndex][columnIndex];

            if (cell.includes("POLYANET")) {
                await this.metaverseService.createPOLYanet(this.candidateCode, rowIndex, columnIndex).toPromise();
                await delay(requestDelay);
            }
            if (cell.includes("SOLOON")) {
                const color = this.extractColorOrDirection(cell);
                await this.metaverseService.createSoloon(this.candidateCode, rowIndex, columnIndex, color).toPromise();
                await delay(requestDelay);
            }
            if (cell.includes("COMETH")) {
                const direction = this.extractColorOrDirection(cell);
                await this.metaverseService.createCometh(this.candidateCode, rowIndex, columnIndex, direction).toPromise();
                await delay(requestDelay);
            }
        }
    }
  }

  extractColorOrDirection(cell: string): string {
    const value = cell.split('_');
    return value[0].toLowerCase();
  }

  async actionReset() {

  }
}
