
//Products
function GetProductName(userOption){
	 var productName="";
	 switch(userOption){
		 case 1:
		     productName="Cricket Bat";
		     break;
		 case 2:
		     productName="Cricket Helmet";
			 break;
		 case 3:
		     productName="Cricket Gloves";
			 break;
		 case 4:
		     productName="Cricket Leather ball";
			 break;
		 case 5:
		     productName="Cricket Batting Pad";
			 break;
		 case 6:
		     productName="Cricket Bag";
			 break;
		 case 7:
		     productName="Cricket Suit";
			 break;
		 case 8:
		     productName="Cricket wickets";
			 break;
		 case 9:
		     productName="Cricket Bat";
			 break;
		 case 10:
		     productName="Cricket ball guardt";
			 break;
		 case 11:
		     productName="Batminton Racket";
			 break;
		 case 12:
		     productName="Batminton Shuttlecock";
			 break;
		 case 13:
		     productName="Batminton Bag";
			 break;
		 case 14:
		     productName="Batminton Suit";
			 break;
		 case 15:
		     productName="Batminton Net";
			 break;
		 case 16:
		     productName="Swimming Board";
			 break;
		 case 17:
		     productName="Swimming Cap";
			 break;
		 case 18:
		     productName="Swimming Fins";
			 break;
		 case 19"
		     productName="Swimming Handpaddles";
			 break;
		 case 20:
		     productName="Swimming Goggles";
			 break;
		 case 21:
		     productName="Tennis Racket";
			 break;
		 case 22:
		     productName="Tennis Ball";
			 break;
		 case 23:
		     productName="Tennis Bag";
			 break;
		 case 24:
		     productName="Tennis Racket";
			 break;
		 case 25:
		     productName="Tennis Ball 3x";
			 break;
		 case 26:
		     productName="Cricket Shoes";
			 break;
		 case 27:
		     productName="Football Shoes";
			 break;
		 case 28:
		     productName="Batminton Shoes";
			 break;
		 case 29:
		     productName="Jogging Shoes";
			 break;
		 case 30:
		     productName="Casual Shoes";
			 break;
		 case 31:
		     productName="Sports cap";
			 break;
		 case 32:
		     productName="Sports Towel";
			 break;
		 case 33:
		     productName="Rugby Ball";
			 break;
		 case 34:
		     productName="Basketball";
			 break;
		 case 35:
		     productName="Sport Waterbottel";
			 break;
		 case 36:
		     productName="Foot Ball";
			 break;
		 case 37:
		     productName="Sports Bag";
			 break;
		 case 38:
		     productName="Sports Hairband";
			 break;
		 case 39:
		     productName="Sports Handband";
			 break;
		 case 40:
		     productName="Golf Racket and Golf Ball";
			 break;
		
		 default:
		     productName="None"
	 }
	 return productName;
}

//Calculation
function CalcPrice(num, amount){
	 var price= itemPrice(num);
	 return price*amount;
	 
function buyProduct(i){
	 var button="button"+i.toString();
	 var product="product"+i.toString();
	 var getCount=document.getElementById(product).value;  //show number of products
	  
	 if(getCount==0){
		 alert("Please enter quantity")
		 return false;
	 }
	 else{
		 selectProducts.push(i);
		 productAmounts.push(getCount);
	 }
}


		 
	 		
