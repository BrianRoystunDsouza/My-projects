//json
var product = {
    "data": [
        {
            "name": "Cosmetics",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                },
                {
                    "name": "soap",
                    "price": 23
                },
                {
                    "name": "hair wash",
                    "price": 1243
                },
                {
                    "name": "body wash",
                    "price": 1234
                }
            ]
        },
        {
            "name": "Household",
            "productList": [
                {
                    "name": "Hair Oil",
                    "price": 122
                },
                {
                    "name": "Face wash",
                    "price": 123
                },
                {
                    "name": "Face",
                    "price": 123
                },
                {
                    "name": "cleaner",
                    "price": 1263
                }
            ]
        }
    ]
}

var div = document.createElement("div");
var str = " "
var mainContainer = document.getElementById("myData");
for (i in product.data) {
    str += `<h2> ${product.data[i].name} </h2> <hr>`; //categories
    for (j in product.data[i].productList) {
        str +=                                        //products
            `<div class= items> <p> Name: ${product.data[i].productList[j].name}</p> 
        <p> Price: ${product.data[i].productList[j].price}</p> <br/>
        <div> <button class="button" onclick="addfunc()">Add to cart</button> </div> 
        <div> <button class="button wrg " onclick="removefunc()">Remove from cart</button> </div> </div>`
    }

}
div.innerHTML = str
mainContainer.appendChild(div);

//add to cart
function addfunc() {
    alert("Added successfully")
    console.log("Added successfully");
    console.log("...........");
}

//remove from cart
function removefunc() {
    alert("Removed successfully")
    console.log("Removed successfully");
    console.log("...........");
}

//display products
document.getElementById("myData").innerHTML = str;

