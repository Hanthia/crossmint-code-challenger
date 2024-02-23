import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToIcon'
})
export class ConvertToIconPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'SPACE':
        return '🌌';
      case 'POLYANET':
        return '🪐';
      case 'RIGHT_COMETH':
          return '🪐';
      case 'LEFT_COMETH':
            return '🪐';
      case 'UP_COMETH':
          return '☄️'
      case 'DOWN_COMETH':
          return '☄️'
      case 'PURPLE_SOLOON':
          return ''
      case 'RED_SOLOON':
          return ''
      case 'WHITE_SOLOON':
        return ''
      case 'BLUE_SOLOON':
        return ''
      default:
        return value;
    }
  }

}
