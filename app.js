// // function allBtn (btnId) {
// //     document.getElementById(btnId).addEventListener('click',function(){
// //         alert('click');
// //         })
// // }

// // allBtn('btn-8gb-memory');
// // allBtn('btn-16gb-memory');

// // function showPrice (id,price){
// //     const display = document.getElementById(id)
// //     const displayInnerText = display.innerText;
// // }

// document.getElementById('btn-8gb-memory').addEventListener('click',function(){
//      const memory = document.getElementById('memory-cost')
//      const memoryInnerText = memory.innerText;
//      const memoryPrice = parseInt(memoryInnerText);
//      const newMemoryPrice = memory.innerText =0 ;
     
//      // subtotal 
//     const subTotal = document.getElementById('sub-total');
//     const subTotalInnerText = parseInt(subTotal.innerText);
//     subTotal.innerText =1299
    
//     // total
//     const total = document.getElementById('total').innerText = 1299;
//     const totalPrice = parseInt(total.innerText);
// })
// document.getElementById('btn-16gb-memory').addEventListener('click',function(){
//     const memory = document.getElementById('memory-cost')
//     const memoryInnerText = memory.innerText = 110;
//     // const memoryPrice = parseInt(memoryInnerText);
//     // const newMemoryPrice = memory.innerText = 110 ;
    
//     // subtotal 
//     const subTotal = document.getElementById('sub-total');
//     const subTotalInnerText = parseInt(subTotal.innerText);
//     subTotal.innerText =1409
    
//     // total
//     const total = document.getElementById('total').innerText = 1409;
// })

// let subTotal1=0;
// function storagePriceF (btnId, storPir) {
//     document.getElementById(btnId).addEventListener('click',function(){
//         const stroage = document.getElementById('storage-cost');
//         const stroageInnerText = stroage.innerText = storPir;
//         const stroagePrice = parseInt(stroageInnerText);
//         // const storageTotal = stroage.innerText =150;
        
//         // memory
//         const memory = document.getElementById('memory-cost').innerText;
//         const memoryPrice=parseInt(memory)
        
//         // sub total
//         const subTotal = document.getElementById('sub-total')
//         // const subTotalInnerText = subTotal.innerText ;
//         // const subTotalPrevius = parseInt(subTotalInnerText);
//         // subTotal1= subTotalPrevius + memoryPrice + storageTotal;
//         subTotal1= stroagePrice + memoryPrice;
//         subTotal.innerText = subTotal1;
//     })
// }

// storagePriceF('btn-stroage-256', 100);
// storagePriceF('btn-stroage-512', 50)

/*let subTotal1 = 0;

function updateSubTotal() {
    const storageTotal = parseInt(document.getElementById('storage-cost').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    
    subTotal1 = storageTotal + memoryPrice;
    
    document.getElementById('sub-total').innerText = subTotal1;
}

function storagePriceF(btnId, storagePrice) {
    document.getElementById(btnId).addEventListener('click', function() {
        document.getElementById('storage-cost').innerText = storagePrice;
        updateSubTotal();
    });
}

function memoryPriceF(btnId, memoryPrice) {
    document.getElementById(btnId).addEventListener('click', function() {
        document.getElementById('memory-cost').innerText = memoryPrice;
        updateSubTotal();
    });
}

storagePriceF('btn-stroage-256', 150);
storagePriceF('btn-stroage-512', 200);

memoryPriceF('btn-memory-8gb', 0);
memoryPriceF('btn-memory-16gb', 180);

// Initial calculation
updateSubTotal();*/


//  memory
function memoryPriceF (btnId , memoryPrice) {
    document.getElementById(btnId).addEventListener('click',function(){
        document.getElementById('memory-cost').innerText = memoryPrice;
        updateSubTotalF()
    })
}
memoryPriceF('btn-8gb-memory',10);
memoryPriceF('btn-16gb-memory',15);

//stroage
function stroagePriceF (btnId , stroagePrice){
    document.getElementById(btnId).addEventListener('click',function(){
        document.getElementById('stroage-cost').innerText = stroagePrice;
        updateSubTotalF()
    })
}
stroagePriceF('btn-256gb-stroage',15);
stroagePriceF('btn-512gb-stroage',25);
stroagePriceF('btn-1024gb-stroage',35);

// delivary
function deliveryPriceF (btnId , deliveryPrice) {
    document.getElementById(btnId).addEventListener('click',function(){
        document.getElementById('delivery-cost').innerText = deliveryPrice;
        updateSubTotalF()
    })
}
deliveryPriceF('btn-free-delivery',0);
deliveryPriceF('btn-cost-delivery',20);

//update subtotal
function updateSubTotalF () {
    
    const pcPrice = parseInt(document.getElementById('pc-price').innerText)
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const stroagePrice = parseInt(document.getElementById('stroage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
    
    let subTotal =pcPrice+ memoryPrice + stroagePrice + deliveryPrice;
    let total = document.getElementById('total').innerText = subTotal
    
    document.getElementById('sub-total').innerText = subTotal;
}


    // pomo code
    document.getElementById('btn-pomo-apply').addEventListener('click',function(){
        const code ='"please discount 5%"'
        const inputPomo = document.getElementById('input-pomo-code');
        const inputPomoText = inputPomo.value;
        
        // pomo code check
        if (code == inputPomoText.toLocaleLowerCase()){
            let total =  document.getElementById('total');
            let totalPrice =parseInt(total.innerText);
            let discount =  totalPrice *5 /100;
            total.innerText =totalPrice - discount
            alert("your discount is :- " + discount);
            
            // focus and blur
            document.getElementById('btn-pomo-apply').addEventListener('focus',function(){
            document.body.style.backgroundColor ='black'            
            document.body.style.color ='white' 
            })           
            
            document.getElementById('btn-pomo-apply').addEventListener('blur',function(){
            document.body.style.backgroundColor ='white'            
            document.body.style.color ='black' 
            })          
        }
        else{
            alert('wrong pomo code')
        }
        
        inputPomo.value = ''
    })