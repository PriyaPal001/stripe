<script>
    import { allproducts } from "$lib";
import ProductCard from "$lib/productCard.svelte";
import { cartItems } from "$lib";

    let checkout=async()=>{
        await fetch( 'api/stipe-Checkout' ,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: $cartItems,
            })
        })
        .then((data)=>{
            return data.json();
        
        })
        .then((data)=>{
            window.location.replace(data.url);
        })
    }
</script>

<div>
    <div>
        {#each $allproducts as {title,pricetag,quantity},i}
            <ProductCard {title}{pricetag}{quantity}{i}/>
        {/each}
    </div>
    <div>
        <button on:click={()=>checkout()}>
            Checkout
        </button>
    </div>
</div>