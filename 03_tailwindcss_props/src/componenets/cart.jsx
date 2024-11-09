import React from "react";

// componenet isliye create karte hai ki usko reuse kar sako and change kar sako
// if suppose resue kar na hai to App.jsx mai <Card/> add karo
// we can use both props.username argument.username(variable) or de structure in {username}

function Cart({username, brand = "If empty",myarr}) {
    console.log("The hidden obj is prop",myarr);
    return (
        <>
        <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
  <div class="rounded-md border ">
    <img
      src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="Laptop"
      class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div class="p-4">
      <h1 class="inline-flex items-center text-lg font-semibold">
        {brand}
      </h1>
      <p class="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <div class="mt-4">
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Sneakers
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #{username}
        </span>
        <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Airmax
        </span>
      </div>
      </div>
      </div>
      </div>
        </>
    )
}

export default Cart