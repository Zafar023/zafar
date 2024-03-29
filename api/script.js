const wraper = document.querySelector(".wraper");

const fanc = async () => {
  const response = await fetch("https://dummyjson.com/users");

  const detalis = await response.json();

  console.log(detalis.users);

  detalis.users.map((el) => {
    wraper.innerHTML += `
    <div class="card">
        <img src=${el.image} alt="">
        <h2>${el.firstName} ${el.lastName}</h2>
        <h3>${el.phone}</h3>
        <p>${el.age}</p>
        <b>${el.birthDate}</b>
        <h4>${el.address.city}</h4>
    </div>
    `
  })
};
fanc();
