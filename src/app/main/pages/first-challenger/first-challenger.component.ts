import { Component, OnInit } from '@angular/core';
import { MetaverseService } from '../../services/metaverse.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-first-challenger',
  templateUrl: './first-challenger.component.html',
  styleUrls: ['./first-challenger.component.scss']
})
export class FirstChallengerComponent implements OnInit {
  candidateCode = '949bdc98-9b16-4baa-9389-2855a1cfe0f1';
  megaverse: any;

  constructor(private metaverseService: MetaverseService) {}

  ngOnInit(): void {
    // this.MetaverseService.httpGetMatrix(this.candidateCode).pipe(map((matrix: any) => {
    //   this.megaverse = matrix.goal
    // })).subscribe();
  }


  async actionCreate() {
    const size = 11; // Tamaño de la cuadrícula
    for (let row = 0; row < size ; row++) {
      for (let column = 0; column < size; column++) {
        if ((row === column || row + column === size - 1) && row > 1 && row < size - 2 && column > 1 && column < size - 2) {
          try {
            const response = await this.metaverseService.createPOLYanet(this.candidateCode, row, column).toPromise();
            await new Promise(resolve => setTimeout(resolve, 2000)); // to resolve error 429
          } catch (error) {
            console.error('Error creating Polyanet:', error);
          }
        }
      }
    }
  }

  async actionReset() {
    const size = 11; // Tamaño de la cuadrícula
    for (let row = 0; row < size ; row++) {
      for (let column = 0; column < size; column++) {
        if (((row === column || row + column === size - 3) && row > 1 && row < size - 3 && column > 1 && column < size - 3)) {
          try {
            await this.metaverseService.deletePOLYanet(this.candidateCode, row, column).toPromise();
            await new Promise(resolve => setTimeout(resolve, 2000)); // to resolve error 429
          } catch (error) {
            console.error('Error creating Polyanet:', error);
          }
        }
      }
    }
  }

}
