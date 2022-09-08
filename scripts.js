const chefs = [
  {
    name :'Adebayo Dabira',
    image:'/assets/jeff-siepman-z-IxdGQ7lPU-unsplash.jpg',
    discipline: 'Pastry'
  },
  {
    name : 'Alayna Taal',
    image: '/assets/22.jpg',
    discipline: 'Pastry'
  },
  {
    name: 'Robert Wood',
    image : '/assets/24.jpg',
    discipline: 'Pastry'
  }
]



let $ = document.querySelector.bind(document);
let url = '/row.json'

async function loadData() {

  let response = await fetch(url)
  let data = await response.json()

  data.map(({ images, title, rating, upload }) => {
    $(".row").innerHTML += `
       <div class="card">
         <img src=${images} class = "posters" />
            <div class="product-details">
              <h4 style = 'height : 3rem;' class="title">
                ${title}
              </h4>
              
             <div class="time">
              <span class='gg-time'></span>
              <p> ${upload} mins</p>
             </div>
             
            <div class='flex'>
               <img class='rating' src='' alt='ratings' />
                <a href='orderPage'> Order Now</a>
             </div>
         </div>
        </div>`
  })
}




function loadChefData() {
  chefs.map(({ name, discipline, image }) => {
    $('.row2').innerHTML += `
        <div class='chefs-roll'> 
           <img src=${image} alt=${name} />
           <div class='text'>
              <h3>${name}</h3>
              <small>${discipline} Chef</small>
           </div>
        </div>`
  })
}
loadData()
loadChefData()
