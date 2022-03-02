
let addProductBtn =document.getElementById('addProduct');
addProductBtn.addEventListener('click', event=> {
    clickAddProduct();
});

function clickAddProduct(){
    const productNumber = document.getElementById('productNumber').value;
    const name = document.getElementById('name').value;
    const unitPrice = document.getElementById('unitPrice').value;
    const quantityInStock = document.getElementById('quantityInStock').value;
    const supplier = document.getElementById('supplier').value;
    const dateSupplied = document.getElementById('dateSupplied').value;
    console.log('The new product Details are: ProductNumber: ' + productNumber +
     ' Name: ' + name + ' Unit Price: ' + unitPrice +
     ' Quantity In Stock: ' + quantityInStock +
     ' Supplier: ' + supplier +
     ' Date Supplied: ' + dateSupplied)
    alert('The new product Details are: ProductNumber: ' + productNumber +
     ' Name: ' + name + ' Unit Price: ' + unitPrice +
     ' Quantity In Stock: ' + quantityInStock +
     ' Supplier: ' + supplier +
     ' Date Supplied: ' + dateSupplied);
    window.print();
}