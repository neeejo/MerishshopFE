import { inject } from "@angular/core";
import { Routes } from "@angular/router";
import { ProvaService } from "src/app/services/prova.service";
import { RicettaService } from "src/app/services/ricetta.service";

export const routes: Routes = [
    {
        path : '',
        title : 'Prodotto',
        loadComponent:() => import('../padre/padre.component'),
        resolve: {
            prodotti : () => inject(ProvaService).getAllProdotti(),
        },
        children: [
            {
                path:'',
                redirectTo:'prodotto',
                pathMatch:'full',
            },
            {
                path:'prodotto',
                title:'Prodotto',
                loadComponent: () => import('../figlio/figlio.component'),
                
            },
        ],
    },
];