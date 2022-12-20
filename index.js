// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    window.bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "definitely bob";

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "not bob after all";
}