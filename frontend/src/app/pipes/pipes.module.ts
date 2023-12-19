import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone.pipe";
import { Cpfipe } from './cpf.pipe';
import { CnpjPipe } from "./cnpj.pipe";

@NgModule({
    declarations:[
        PhonePipe,
        Cpfipe,
        CnpjPipe
    ],
    exports:[
        PhonePipe,
        Cpfipe,
        CnpjPipe
    ]
})
export class PipesModule{

}