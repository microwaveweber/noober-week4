window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  

  // 1. Create an i variable and loop it according to the number of data
for (let i =0; i< json.length; i++){
  // 2. Create varialbes to be used in later output
  let ride = json[i]
  let passengerFirstName= ride.passengerDetails.first
  let passengerLastName= ride.passengerDetails.last
  let passengerPhoneNumber= ride.passengerDetails.phoneNumber
  let passengerAddress= ride.pickupLocation.address
  let passengerCity= ride.pickupLocation.city
  let passengerState= ride.pickupLocation.state
  let passengerZip= ride.pickupLocation.zip
  let passengerDropAddress= ride.dropoffLocation.address
  let passengerDropCity= ride.dropoffLocation.city
  let passengerDropState= ride.dropoffLocation.state
  let passengerDropZip= ride.dropoffLocation.zip


  // 3. Create HTML class 
  let riderElement = document.querySelector(`.rides`)
  
  // 4. Insert HTML class based on differnt levels of service
  
  if (ride.purpleRequested == true){
    riderElement.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-700">
        <i class="fas fa-car-side"></i>
        <span>Noober Purple</span>
      </h1>

      <div class="border-4 border-purple-700 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1 text-purple-700">${passengerFirstName} ${passengerLastName}</h2>
            <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-purple-700 text-white p-2">
              ${ride.numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerAddress}</p>
            <p>${passengerCity}, ${passengerState} ${passengerZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerDropAddress}</p>
            <p>${passengerDropCity}, ${passengerDropState} ${passengerDropZip}</p>
          </div>
        </div>
      </div>
    `
    )
  } else if (ride.numberOfPassengers > 3){
    riderElement.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober XL</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
            <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride.numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerAddress}</p>
            <p>${passengerCity}, ${passengerState} ${passengerZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerDropAddress}</p>
            <p>${passengerDropCity}, ${passengerDropState} ${passengerDropZip}</p>
          </div>
        </div>
      </div>
    `
    )

  } else {
    riderElement.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober X</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
            <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride.numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${passengerAddress}</p>
            <p>${passengerCity}, ${passengerState} ${passengerZip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${passengerDropAddress}</p>
            <p>${passengerDropCity}, ${passengerDropState} ${passengerDropZip}</p>
          </div>
        </div>
      </div>
    `
    )


  }

    
}


})