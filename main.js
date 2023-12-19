// var nameInput = document.getElementById("productName")
// var priceInput = document.getElementById("productPrice")
// var categoryInput = document.getElementById("productCategory")
// var saleInput = document.getElementById("productSale")
// var descInput = document.getElementById("productDescription")
// var prodctlist=[]




// function addProduct(){
//     var prodct={
//         name: nameInput.value,
//         price: priceInput.value,
//         categ:categoryInput.value,
//         sale: saleInput.value,
//         desc: descInput.value
       
//     }
//     prodctlist.push(prodct)
//     displayproudct()
//     clear()




// }
// function displayproudct(){
    
//     var cartona=""
//     for(i=0;i<prodctlist.length;i++)
//     cartona+=`
//     <tr>
//     <th>${i}</th>
//     <th>${prodctlist[i].name}</th>
//     <th>${prodctlist[i].price}</th>
//     <th>${prodctlist[i].categ}</th>
//     <th>${prodctlist[i].sale}</th>
//     <th>${prodctlist[i].desc}</th>
//    <th> <button type="button"   class="btn btn-outline-info">Add Product</button></th>
//    <th><button type="button" class="btn btn-outline-danger">clear Form</button></th>
    

// `
// document.getElementById('mybody').innerHTML=cartona;


// }
// function clear(){
//     nameInput.value=""
//     priceInput.value=""
//     categoryInput.value=""
//     saleInput.value=""
//     descInput.value=""

// }



var nameInput = document.getElementById("productName")
var urlInput = document.getElementById("producturl")
var display=[]

function show(){
    var formation={
        name:nameInput.value,
        url:urlInput.value,

    }
    display.push(formation)
    displaymark()
  
    cleeer()
}
function displaymark(arr){
    var cartona=``
for(i=0;i<display.length;i++){
    cartona+=`
    
    <tr>
         <th>${display[i].name}</th>
         <th>${display[i].url}</th>
         <th><button type="button" onclick="deletprodidt(${i})" class="btn btn-outline-danger">visit</button></th>


         <th><button type="button" onclick="deletprodidt(${i})" class="btn btn-outline-danger">delet</button></th>
                  
     </tr>
    `
}
document.getElementById('mybody').innerHTML=cartona

}

function cleeer(){
    nameInput.value=""
    urlInput.value=""
}
function deletprodidt(splideindex){
    display.splice(splideindex,1)
    show(display);
}