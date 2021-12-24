import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'bytespipe'
})

export class BytesPipe implements PipeTransform {
    transform(size: number, extension: string = 'MB') {
        return (size / (1024 * 1024)).toFixed(2) + extension;
    }
}
