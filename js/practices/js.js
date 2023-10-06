const loadPhone = async( searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones =data.data;
    console.log(phones)
    displayPhone(phones);
}


 const displayPhone=(phones)=>{
    const phonesContainer =document.getElementById('Phone-container');
     phones.forEach(phone => {
        console.log(phones);
        // const phoneCard = document.createElement('div');
        // phoneCard.classList=`card w-96 bg-gray-100 shadow-xl`
        // phoneCard.innerHTML=`
        // <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        // <div class="card-body">
        //   <h2 class="card-title">Shoes!</h2>
        //   <p>If a dog chews shoes whose shoes does he choose?</p>
        //   <div class="card-actions justify-end">
        //     <button class="btn btn-primary">Buy Now</button>
        //   </div>
        // `
        // phonesContainer.appendChild(phoneCard);
        
     });
 }