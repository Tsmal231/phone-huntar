const loadPhone =async( searchText,isShowAll) =>{
  const res =await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
    const phones = data.data;
   //  console.log(phones);
    displayPhone(phones,isShowAll);
    
  }
  
  
  const displayPhone=(phones,isShowAll)=> {
    
    const phonesContainer = document.getElementById('phone-container');
    // clear container before adding to new card
    phonesContainer.textContent='';

        // show all button 
         const showAllContainer =document.getElementById('show-all-btn');
         if(phones.length > 12 && !isShowAll){
           showAllContainer.classList.remove('hidden')
         }
         else{
          showAllContainer.classList.add('hidden')
         }

        // display only 12 phone  if not show all
        if(!isShowAll){
          phones=phones.slice(0,12)
        }
        
   phones.forEach(phone => {
    //   console.log(phone);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card  bg-gray-300 p-6 shadow-xl`;
    phoneCard.innerHTML = `
      <figure><img src= ${phone.image} /></figure>
      <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
      <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">show Details</button>
      </div>
      </div>
      `;
    phonesContainer.appendChild(phoneCard);
   

  });
  // hide loading
  toggleLoadSpinner(false);


}
// handle show details 
const handleShowDetails =async(id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  showDetailsHandler(phone);
}
   
const showDetailsHandler =(phone) =>{
  const phoneDetails= document.getElementById('modal-phone-details');
  phoneDetails.innerHTML=`
  <img src="${phone.image}" alt=""/>
  <h2> ${phone.name} </h2>
  
  <h2> ${phone.brand} </h2>
  <h2><span>memory :</span> ${phone.mainFeatures.memory} </h2>
  <h2><span>DisplaySize :</span> ${phone.mainFeatures.displaySize} </h2>

  `
  details_modal.showModal()
  
}


const handleSearch =(isShowAll)=> {
        toggleLoadSpinner(true);
        const searchField = document.getElementById("input-field");
        const searchText= searchField.value;
        //   console.log(searchText);
        loadPhone( searchText,isShowAll);
        
      
}
 
const toggleLoadSpinner =(isLoading)=>{
  const loading =document.getElementById('loading-spinner');
   if(isLoading){
     loading.classList.remove('hidden')
   }
   else{
    loading.classList.add('hidden');
   }
  }
  const handleShowAll=()=>{
    handleSearch(true)
  }
 
