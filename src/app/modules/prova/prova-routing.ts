import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { RicettaService } from "src/app/services/ricetta.service";

export const routes: Routes = [
    {
        path : '',
        title : 'Ricetta',
        loadComponent:() => import('../ricetta/ricetta.component'),
        resolve: {
            ricette : () => inject(RicettaService).getAll(),
        },
        children: [
            {
                path:'',
                redirectTo:'ingrediente',
                pathMatch:'full',
            },
            {
                path:'ingrediente',
                title:'Ingrediente',
                loadComponent: () => import('../ingrediente/ingrediente.component'),
            },
        ],
    },
];