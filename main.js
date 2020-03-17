//selecting buttons from html document and storing them in suitable variables
let btnFirst = document.getElementById('btnFirst');
let btnSecond = document.getElementById('btnSecond');
let btnThird = document.getElementById('btnThird');
let btnForth = document.getElementById('btnForth');
let btnThirdSpecialRate = document.getElementById('btnThirdSpecialRate');
let btnForthSuperHost = document.getElementById('btnForthSuperHost');

//creating a object template with given properties
class RentalProperty{
    constructor(name, price, rating, location, rooms, availabilty, features) {
    this.name = name; 
    this.price = price; 
    this.rating = rating; 
    this.location = location;
    this.rooms = rooms; 
    this.availabilty = availabilty;
    this.features = features;
  } 
}

    //instantiating objects for the class RentalProperty
    let firstProperty = new RentalProperty('Mountain Side Studio', 110, 5, 'Blue Mountains', 2, 'available', 'Mountains View');
    let secondProperty = new RentalProperty('Liberty Village', 114, 5, 'Toronto', 1, 'available', 'CN Tower View');

    //creating a function using prototype to make it able to inherited and display the description of the object
    RentalProperty.prototype.description = function()
    {
        alert(this.name + ' is of $'+ this.price + ' with ' + this.rating + ' star rating. It is located in ' + this.location + ' and have ' + this.rooms + ' rooms. This property is ' + this.availabilty + '. This property have ' + this.features+  '.' );
        
    }

    //creating a object template with given properties which extends the RentalProperty class and includes a specialPrice property
    class SpecialRate extends RentalProperty {
        constructor(name, price, rating, location, rooms, availabilty, features, specialPrice) {
        super(name, price, rating, location, rooms, availabilty, features); 
        this.specialPrice = specialPrice;
        }
    }


    //instantiating objects for the class Special Rate
    let thirdProperty = new SpecialRate('Ensuite', 80, 5, 'Niagara Falls', 3, 'available', 'walking distance to Niagara Falls', 20);

    //creating a function using prototype to make it able to inherited and display the discount amount of the object
    SpecialRate.prototype.discount = function()
    {
        alert('There is 20% off on this property and the new Price for a night is: $ ' + ((this.price) - (this.price*(this.specialPrice/100))));

    }
    //creating a object template with given properties which extends the RentalProperty class and includes a superHostBadge property
    class SuperHost extends RentalProperty{
        constructor(name, price, rating, location, rooms, availabilty, features, superHostBadge) {
            super(name, price, rating, location, rooms, availabilty, features); 
            this.superHostBadge = superHostBadge;
        }
    }

    //instantiating objects for the class SuperHost
    let forthProperty = new SuperHost('Comfy Studio', 100, 5, 'Ottawa', 3, 'available', 'Entire Home available', 'Super Host');

    //creating a function using prototype to make it able to inherited and display the superHostBadge of the object
    SuperHost.prototype.superHostRating = function()
    {
        alert('This property has been rated ' + this.rating +' stars by all guests and the host has a badge of ' + this.superHostBadge);

    }



    //calling the method description when the first button is clicked so the description of first object is displayed
    btnFirst.addEventListener("click" , function(){
        firstProperty.description();
    })

    //calling the method description when the second button is clicked so the description of second object is displayed
    btnSecond.addEventListener("click" , function(){
        secondProperty.description();
    })

    //calling the method description when the third button is clicked so the description of third object is displayed
    btnThird.addEventListener("click" , function(){
        thirdProperty.description();
    })

    //calling the method discount when the discount button is clicked so the discount on third object is displayed
    btnThirdSpecialRate.addEventListener("click" , function(){
        thirdProperty.discount();
    })

    //calling the method description when the forth button is clicked so the description of forth object is displayed
    btnForth.addEventListener("click" , function(){
        forthProperty.description();
    })

    //calling the method superHostRating when the Badge button is clicked so the badge of forth object is displayed
    btnForthSuperHost.addEventListener("click" , function(){
        forthProperty.superHostRating();
    })

  

  