// place files you want to import through the `$lib` alias in this folder.
// place files you want to import through the `$lib` alias in this folder.
import { derived, writable } from "svelte/store";

export let allproducts= writable([
    {
        id:"price_1OGKeFSIChzZPVAwhN1OkFh9",
        title:"Tea",
        pricetag:300,
        quantity:0
    },
    {
        id:"price_1OGKfwSIChzZPVAwJtQADb7P",
        title:"Coffee",
        pricetag:400,
        quantity:0
    },
    {
        id:"price_1OGKgiSIChzZPVAwKL5t1A1W",
        title:"Juice",
        pricetag:500,
        quantity:0
    }
]);

export let cartItems= derived(allproducts,($allproducts)=>{
    return $allproducts.filter((n)=>n.quantity>=1);
});