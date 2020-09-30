
function diamond(){
 	var yourSelect = document.getElementById( "purchaseType" );
	let selectedOption =  yourSelect.options[ yourSelect.selectedIndex ].value ;
	if(selectedOption === 'Diamond_Topup'){
		document.querySelector('#membershipType').classList.add('d-none');
		document.querySelector('#diamondList').classList.remove('d-none');
		document.querySelector('#diamondList').classList.add('required');
		document.querySelector('#diamondList').style.animation = 'fadein .4s linear';
		document.querySelector('#ffCost').setAttribute('value', 'RS 120');
	}else if(selectedOption === 'Membership') {
		document.querySelector('#diamondList').classList.add('d-none');
		document.querySelector('#membershipType').classList.remove('d-none');
		document.querySelector('#membershipType').classList.add('required');
		document.querySelector('#membershipType').style.animation = 'fadein .4s linear';
		document.querySelector('#ffCost').setAttribute('value', 'RS 250');
		
};

 }

	

	function ensure(){
	var yourSelect = document.getElementById( "purchaseType" );
	let selectedOption =  yourSelect.options[ yourSelect.selectedIndex ].value ;

	if(selectedOption === 'nothing'){
		alert(`Please select any of the "Purchase type" (row:3)`)
	};

}



function priceListDiamond(){
	let diamondSelect = document.getElementById("diamondLists")
	let ds = diamondSelect.options[ diamondSelect.selectedIndex ].value ;
	console.log(ds);
	let price;
	switch (ds) {
		case '100_Diamonds':
			price = 120;
			break;

		case '200_Diamonds':
			price = 240;
			break;

		case '310_Diamonds':
			price = 360;
			break;

		case '410_Diamonds':
			price = 480;
			break;

		case '520_Diamonds':
			price = 590;
			break;

		case '620_Diamonds':
			price = 750;
			break;

		case '720_Diamonds':
			price = 870;
			break;


		case '830_Diamonds':
			price = 970;
			break;
		case '930_Diamonds':
		price = 1050;
			break;
		case '1060_Diamonds':
		price = 1250;
			break;
		case '2180_Diamonds':
		price = 2400;
			break;
	};
		document.querySelector('#ffCost').setAttribute('value', 'Rs ' + price );

	
}

function priceListMembership () {
	let memberSelect = document.getElementById("membershipTypes")
	let ms = memberSelect.options[ memberSelect.selectedIndex ].value ;
	console.log(ms);
	
	if(ms == 'Weekly_Membership'){
		document.querySelector('#ffCost').setAttribute('value', 'RS 250');
	}else if(ms == 'Monthly_Membership'){
		document.querySelector('#ffCost').setAttribute('value', 'RS 1000');
	}
}


 




