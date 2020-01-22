import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'emailFilter'
})
export class EmailFilterPipe implements PipeTransform {
    transform(list: any[], searchEmail: string) : any[] {
        if(!list || !searchEmail) {
            return list;
        }

        return list.filter(info => 
            info.email.toLowerCase().indexOf(searchEmail.toLowerCase()) !== -1)

    }
}