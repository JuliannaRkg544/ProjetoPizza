let pizzaJson = [
    {id:1, name:'Mussarela', img:'./css/imgs/pizza.png', price:20.19, sizes:['100g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:2, name:'Calabresa', img:'./css/imgs/pizza2.png', price:18.00, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:3, name:'Quatro Queijos', img:'./css/imgs/pizza3.png', price:17.45, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:4, name:'Americana', img:'./css/imgs/pizza4.png', price:19.77, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:5, name:'Sorvete', img:'./css/imgs/pizza5.png', price:21.43, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:6, name:'Moda da Casa', img:'./css/imgs/pizza6.png', price:18.55, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'},
    {id:7, name:'Chocolate', img:'./css/imgs/pizza7.png', price:22.36, sizes:['320g', '530g', '860g'], description:'Descrição da pizza em mais de uma linha muito legal bem interessante'}
];

function main(){
    const pizzas = document.querySelector("section");
     pizzas.innerHTML = ""
    //  testing commit
    for (let i=0; i<pizzaJson.length; i++){
        pizzas.innerHTML += `       
        <div class="pizza-option">
            <img src="${pizzaJson[i].img}" alt="pizza1">
            <button onclick="selecionada(${i})">+</button>
            <span class="title">
                <p id="price"><b>R$ ${pizzaJson[i].price.toFixed(2)}</b></p> 
                <p id="flavor">${pizzaJson[i].name}</p>
                <p>${pizzaJson[i].description }</p>
            </span>
        </div>
    `
    }
   
}
main()



function hide(){
    document.querySelector("main").classList.add("");
    document.querySelector("aside").classList.add("");
    document.querySelector(".confirmation-box").classList.add("")
}

hide()

function selecionada(i){
   
    const conf = document.querySelector(".confirmation-box");
    conf.innerHTML = ` 
    <div class="confirmation" >
    <img src="${pizzaJson[i].img}" alt="fotinha"/>
    <div class="pedido">
        <h3>${pizzaJson[i].name}</h3>
        <p>${pizzaJson[i].description}</p>
        <p>Tamanho</p>
        <button>Pequena ${pizzaJson[i].sizes[0]}</button><button>Média ${pizzaJson[i].sizes[1]}</button><button>Grande ${pizzaJson[i].sizes[2]}</button>
        <p>Preço</p>
        <div class="preço-info">
            <h4>R$ ${pizzaJson[i].price.toFixed(2)}</h4>
             <button>+1</button>
        </div>
        <div class="confirmation-button">

            <button onclick=" confirmarPedido(${i})" >Adicionar ao Carrinho</button>
            <button>Cancelar</button>
        </div>
    </div>
</div> `
    document.querySelector(".confirmation-box").classList.remove("hidden")
    document.querySelector(".confirmation-box").style.opacity = "0"
    setTimeout(()=>{
        document.querySelector(".confirmation-box").style.opacity = "1"
  
    },200)
    document.querySelector("main").style.opacity = "0.5"
    document.querySelector("header").style.opacity = "0.5"

}

function confirmarPedido(i){
    
    const sidebar = document.querySelector("aside")
    document.querySelector(".confirmation-box").style.display= "none";
    document.querySelector("aside").classList.toggle("hidden");
   // document.querySelector(".aside").style.opacity = "0"
    // setTimeout(()=>{
    //     document.querySelector(".aside").style.opacity = "1"
    // },200)

    sidebar.innerHTML = `
    <div class="aside">
    <h2> Suas Pizzas </h2>
    <div class="your-pizza" >
        <img src="${pizzaJson[i].img}" alt="pizza">
        <h4>${pizzaJson[i].name}</h4>
        <button></button>
    </div>
    <div class="line"></div>
    <div class="info">
        <span>
            <p>Subtotal</p>
            <p>R$ ${pizzaJson[i].price}</p>
        </span>
        <div class="line"></div>
        <span>
            <p>Desconto</p>
            <p>R$ 52222</p>
        </span>
    </div>
    <div class="line"></div>
    <div class="finalizar-compra">
        <span>
            <h4>Total</h4>
            <p>R$ 5555</p>
        </span>
      <button>Finalizar Compra</button>
    </div>
  </div>
    `
}