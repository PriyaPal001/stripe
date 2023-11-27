<script>
	import { allproducts } from "$lib";
    export let i=0;
    export let title ="pretty";
    export let quantity =1;
    export let pricetag=60;

    let increment=()=>{
        allproducts.update((n)=>{
            n[i].quantity++;
            return n;
        })
    }
    let decrement=()=>{
        allproducts.update((n)=>{
            n[i].quantity--;
            return n;
        })
    }
</script>


<div>
    <h1>{title}</h1>
    <div>
        Quantity: <strong>{quantity}</strong>
        <div>
            <button on:click={increment}>+</button>
            <button on:click={decrement}>-</button>
        </div>
    </div>
    <div>
        Price:{pricetag}
    </div>
</div>