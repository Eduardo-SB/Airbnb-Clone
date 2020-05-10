
fetch("https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72")
	.then((response) => {
    return response.json();
	})
	.then((data) => {
    console.log(data)
		data.forEach((room) => {
			let rooms = document.getElementById("stays");
      
      let div = document.createElement("div");
      div.className = "stays-list";

      let photo = document.createElement("img");
      // photo.setAttribute("src", room.photo);
      photo.src = room.photo;

      let p = document.createElement("p");
      p.className = "property-type";
      p.innerHTML = room.property_type;      
      
      let name = document.createElement("p");
      name.innerHTML = room.name;  
      
      let price = document.createElement("p");
      price.innerHTML = "R$: " + room.price + ",00 / Noite";
      
      rooms.appendChild(div);
      div.appendChild(photo);
      div.appendChild(p); 
      div.appendChild(name); 
      div.appendChild(price); 
      
		});
	});
