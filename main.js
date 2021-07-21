var pro1_items = 0;
var pro2_items = 0;
var pro3_items = 0;

var ave_price_pro1 = 0;
var ave_price_pro2 = 0;
var ave_price_pro3 = 0;

var prices_p1 = new Array;
var prices_p2 = new Array;
var prices_p3 = new Array;

var buyers = new Array;

function Select_PC(){
    var selected_product = document.getElementById("products").value;
    return selected_product;
}

function Select_BP(){
    var selected_product = document.getElementById("bproducts").value;
    return selected_product;
}

function Item_Received(){
    var item_received = document.getElementById("item_R").value;
    return item_received;
}
function Price_Item(){
    var price_item = document.getElementById("p_item_R").value;
    return price_item;
}

function users(){
    var user = document.getElementById("Email").value;
    return user;
}

function Item_Bought(){
    var item_bought = document.getElementById("item_bought").value;
    return item_bought;
}


function Updating_items(items,avarage,id ,id_items,id_average){
    var p = document.createElement("p");
    p.className = "num value";
    p.setAttribute("id",id_items);
    var pa = document.createElement("p");
    pa.setAttribute("id",id_average);

    var node = document.createTextNode(items);
    var nodea = document.createTextNode(avarage);


    p.append(node);
    pa.append(nodea);

    var parent = document.getElementById(id);

    var child_items = document.getElementById(id_items);
    var child_ave = document.getElementById(id_average);

    parent.replaceChild(p,child_items);
    parent.replaceChild(pa,child_ave);

}

function item_only(items,id,id_items){
    
    var p = document.createElement("p");
    p.className = "num value";
    p.setAttribute("id",id_items);
   
    var node = document.createTextNode(items);

    p.append(node);

    var parent = document.getElementById(id);

    var child_items = document.getElementById(id_items);

    parent.replaceChild(p,child_items);
}

function Add_Stock(){
    Work();
}
function Remove_Stock(){
    Remove();
}

function Remove(){
    var user = users();
    var bought_items = Item_Bought();
    var spc = Select_BP();

    if(spc=="product_0"){
        alert("please select product");
    }

    else if(user=="" || bought_items ==0){
        alert("field cant be empty");
    }
    else{ 
        if(!buyers.includes(user)){
            if(spc =="product_1"&& pro1_items!=0 ){
                pro1_items-= parseInt(bought_items);
                if(pro1_items<0){
                    alert("only "+pro1_items+ " left");
                }

                else{
                    var id = "items_Level1";
                    var id_items = "num_value1";

                    buyers.push(user);

                    item_only(pro1_items,id,id_items);
                }
            }
            else if(spc =="product_2" && pro2_items!=0 ){
                pro2_items-= parseInt(bought_items);
                if(pro2_items<0){
                    alert("only "+pro2_items+ " left");
                }

                else{
                    var id = "items_Level2";
                    var id_items = "num_value2";

                    buyers.push(user);

                    item_only(pro2_items,id,id_items);
                }

            }
            else if(spc =="product_3" && pro3_items!=0 ){
                pro3_items-= parseInt(bought_items);
                if(pro3_items<0){
                    alert("only "+pro3_items+ " left");
                }
                else{
                    var id = "items_Level3";
                    var id_items = "num_value3";

                    buyers.push(user);
                
                    item_only(pro3_items,id,id_items);
                }
            }
            else{
                if(spc =="product_1"){
                    alert("We are out of stock sorry");
                }
                else if(spc =="product_2"){
                    alert("We are out of stock sorry");
                }
                else if(spc =="product_3"){
                    alert("We are out of stock sorry");
                }
            }
        }
        else{
            alert("Email already used");
        }
    }
}

function Work(){

    var spc = Select_PC();
    var ir = Item_Received();
    var pc = Price_Item();

    
    if(spc=="product_0"){
        alert("please select product");
    }

    else if(ir==0 || pc ==0){
        alert("field cant be empty");
    }

    else{
        if(spc == "product_1"){
            pro1_items+=parseInt(ir);
            prices_p1.push(parseFloat(pc));
            var sum = 0;
            for(i = 0;i<prices_p1.length;i++){
                sum+=prices_p1[i];
            }
            ave_price_pro1= sum/prices_p1.length;

            var id = "items_Level1";
            var id_items = "num_value1";
            var id_average = "average1";

            Updating_items(pro1_items,ave_price_pro1,id,id_items,id_average);

            // alert("avarge ="+ave_price_pro1);
            // alert("itesms = "+pro1_items);

        }

        else if(spc == "product_2"){
            pro2_items+=parseInt(ir);
            prices_p2.push(parseFloat(pc));
            var sum = 0;
            for(i = 0;i<prices_p2.length;i++){
                sum+=prices_p2[i];
            }
            ave_price_pro2= sum/prices_p2.length;

            var id = "items_Level2";
            var id_items = "num_value2";
            var id_average = "average2";

            Updating_items(pro2_items,ave_price_pro2,id,id_items,id_average);

            // alert("average = "+ave_price_pro2);
            // alert("items = "+pro2_items);
        }
        
        else if(spc == "product_3"){
            pro3_items+=parseInt(ir);
            prices_p3.push(parseFloat(pc));
            var sum = 0;
            for(i = 0;i<prices_p3.length;i++){
                sum+=prices_p3[i];
            }
            ave_price_pro3= sum/prices_p3.length;

            var id = "items_Level3";
            var id_items = "num_value3";
            var id_average = "average3";

            Updating_items(pro3_items,ave_price_pro3,id,id_items,id_average);

            // alert("avarage = "+ave_price_pro3);
            // alert("items = "+pro3_items);
        }
        else{
            alert("idk what happened");
        }
    }
}
