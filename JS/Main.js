var Product_Name = document.getElementById('name');
var Product_Price = document.getElementById('Price');
var Product_Category = document.getElementById('Category');
var Product_Description = document.getElementById('Description');
var table = document.getElementById('tableBody');
var Products_list = [];
let regex = /^(https?:\/\/)?([a-zA-Z0-9-\.]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/;
var card = document.getElementById('card-box');
var nameErrorMessage = document.getElementById('nameMessage');
var priceErrorMessage = document.getElementById('priceMessage');
var categoryErrorMessage = document.getElementById('categoryMessage');
var descriptionErrorMessage = document.getElementById('descriptionMessage');
var searchItem = document.getElementById('search'); 


function checkInputs(){
    if(Product_Name.value == "" || Product_Price == "" || Product_Category ==""){
        card.classList.remove("d-none");
    }else{
        createelement();
    }
}

function createelement(){
    var element = {
        index : Products_list.length,
        name : Product_Name.value,
        price : Product_Price.value,
        category : Product_Category.value,
        description : Product_Description.value,
    };
     Products_list.push(element);   
     displayelement();
     clearinputs();
}


function clearinputs(){
     Product_Name.value = "";
     Product_Price.value = "";
     Product_Category.value = "";
     Product_Description.value = "";
}

function displayelement(){
    var row = "";

    for(var i = 0 ; i< Products_list.length ; i++){
        row += `<tr>
                    <td class="text-center py-2">${Products_list[i].index+1}</td>
                    <td class="text-center py-2">${Products_list[i].name}</td>
                    <td class="text-center py-2">${Products_list[i].price}</td>
                    <td class="text-center py-2">${Products_list[i].category}</td>
                    <td class="text-center py-2">${Products_list[i].description}</td>
                    <td class="text-center py-2"> <button class="btn bg-danger text-light" onclick = " deleting(${i});"> <i class="bi bi-trash3 pe-2"></i> Delete </button> </td>
                </tr>`
    }
    table.innerHTML = row;
}

function exit(){
    card.classList.add("d-none");
}

function deleting(index){
  Products_list.splice(index,1);
  displayelement();
}

function validateName(){
    var testname = Product_Name.value;
    var nameRegex = /^[A-Z][a-z]{3,10}$/;

    if(nameRegex.test(testname)){
        Product_Name.classList.remove("is-invalid");
        Product_Name.classList.add("is-valid");
        nameErrorMessage.classList.add("d-none");
        return true;
    }else{
        Product_Name.classList.remove("is-valid");
        Product_Name.classList.add("is-invalid");
        nameErrorMessage.classList.remove("d-none");
        return false;
    }
}

function validatePrice(){
    var testprice = Product_Price.value;
    var priceRegex = /^[1-9]{2,5}$/;

    if(priceRegex.test(testprice)){
        Product_Price.classList.remove("is-invalid");
        Product_Price.classList.add("is-valid");
        priceErrorMessage.classList.add("d-none");
        return true;
    }else{
        Product_Price.classList.remove("is-valid");
        Product_Price.classList.add("is-invalid");
        priceErrorMessage.classList.remove("d-none");
        return false;
    }
}

function validateCategory(){
    var testcategory = Product_Category.value;
    var categoryRegex = /^[a-z]{5,15}$/;

    if(categoryRegex.test(testcategory)){
        Product_Category.classList.remove("is-invalid");
        Product_Category.classList.add("is-valid");
        categoryErrorMessage.classList.add("d-none");
        return true;
    }else{
        Product_Category.classList.remove("is-valid");
        Product_Category.classList.add("is-invalid");
        categoryErrorMessage.classList.remove("d-none");
        return false;
    }
}

function validateDescription(){
    var testdescription = Product_Description.value;
    var descriptionRegex = /^[a-z]{5,30}$/;

    if(descriptionRegex.test(testdescription)){
        Product_Description.classList.remove("is-invalid");
        Product_Description.classList.add("is-valid");
        descriptionErrorMessage.classList.add("d-none");
        return true;
    }else{
        Product_Description.classList.remove("is-valid");
        Product_Description.classList.add("is-invalid");
        descriptionErrorMessage.classList.remove("d-none");
        return false;
    }
}


function searchElements(){
    var word = searchItem.value;
    var row= "";
    for(var i = 0; i < Products_list.length ; i++){

        if(Products_list[i].name.toLowerCase().includes( word.toLowerCase() )){
                row += `<tr>
                            <td class="text-center py-2">${Products_list[i].index+1}</td>
                            <td class="text-center py-2">${Products_list[i].name}</td>
                            <td class="text-center py-2">${Products_list[i].price}</td>
                            <td class="text-center py-2">${Products_list[i].category}</td>
                            <td class="text-center py-2">${Products_list[i].description}</td>
                            <td class="text-center py-2"> <button class="btn bg-danger text-light" onclick = " deleting(${i});"> <i class="bi bi-trash3 pe-2"></i> Delete </button> </td>
                        </tr>`
           
        }
        
    }
    table.innerHTML = row;
}


