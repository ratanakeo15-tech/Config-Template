import { Component } from "@angular/core";
import { ProductPage } from "./product-page";

export default[
    {
        path:'',
        component:ProductPage
    },
     {
        path:':id',
        component:ProductPage
    }
]