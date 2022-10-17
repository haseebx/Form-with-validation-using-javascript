const video = { // -> Object created

    title: 'a',
    actor:'X', 
    Pro: ['b','c','d'], //Array in object
    
    play()  {

        console.log("Title : " ,this.title);
    },
    showActor(){
        console.log("Actor : ", this.actor);
    },

    showProducer(){
       this.Pro.forEach(function(Pro){ //loop 
          console.log(this.title ,Pro);
        },this);
    }
}

video.play();
video.showActor();
video.showProducer();
let X= ['A','B','C']; // Array 

class Person {
constructor(Fname,Lname ,page){

    this.Firstname=Fname
    this.Lastname=Lname
    this.age=page

}
detail(){
    console.log("Name is ", this.Fname, " age is ", this.age);
}

}

let M=new Person('Haseeb', 20);

const pperson={

    fullname: function(city){
        return this.Fname +" "+ this.Lname +" "+ city;
    }
}

const pperson1 ={
    Fname: "Muhammad",
    Lname: "Haseeb"
}
const pperson2 ={
    Fname: "Ameer",
    Lname:"Ali"
}

const lettersX= new Set(['a','b','c'])

let text="";
lettersX.forEach(function(val){
    text+=val;
});

 /*
                console.log("Hello World ");
                let mydate = new Date();
                console.log(mydate);
        
        
        var mango = new Object();
        mango.color = "yellow";
        mango.shape = "round";
        mango.sweetness = 8;

        mango.howSweetAmI = function () {
            console.log("hmm hmm Good");
        }

        var mangoFruit = {
            color: "yellow",
            sweetness: 8,
            fruitName: "Mango",
            nativeToLand: ["South America", "Central America"],

            showName: function () {
                console.log("This is " + this.fruitName);
            },
            nativeTo: function () {
                this.nativeToLand.forEach(function (eachCountry) {
                    console.log("Grown in:" + eachCountry);
                });
            }
        }
*/
        /*
                function Fruit(theColor, theSweetness, theFruitName, theNativeToLand, S) {
        
                    this.color = theColor;
                    this.sweetness = theSweetness;
                    this.fruitName = theFruitName;
                    this.nativeToLand = theNativeToLand;
        
                    this.showName = function () {
                        console.log("This is a " + this.fruitName);
                    }
        
                    this.nativeTo = function () {
                        this.nativeToLand.forEach(function (eachCountry) {
                            console.log("Grown in:" + eachCountry);
                        });
                    }
                    this.size = function () {
                        this.size = S;
                        console.log("The size of " + this.fruitName, ": " + this.size);
                    }
        
                }
        */
