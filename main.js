//regular menu
menu_list_array = ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];

    //function to show the menu
    function getmenu(){
        var htmldata;
        htmldata="<ol class='menulist'>"
        menu_list_array.sort();

        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        }

         htmldata=htmldata+"</ol>"
         document.getElementById("display_menu").innerHTML = htmldata;
    }

    //function to add items to the menu
    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").value;

        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>"

        //for loop to get the names of the pizzas
        for(var i=0; i<menu_list_array.length; i++){

            htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
        }
          htmldata=htmldata+"</section>"
          document.getElementById("display_addedmenu").innerHTML = htmldata;
    }