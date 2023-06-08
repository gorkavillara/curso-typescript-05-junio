const buscarPersonaje = (id: string) => {
  console.log(`Buscando personaje ${id}`);
  const baseUrl = "https://swapi.dev/api/";
  const url = `${baseUrl}people/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { name } = data;

      const miSpan = document.querySelector(
        "span#info"
      ) as HTMLSpanElement | null;
      if (!miSpan) return;

      miSpan.innerText = name;
    })
    .catch((error) => console.error(error));
};

// const miBoton = document.getElementById("boton-click2")
const miBoton = document.querySelector(
  "button#boton-click"
) as HTMLButtonElement | null;
// const miInput = document.getElementById("input-num") as HTMLInputElement | null
const miInput = document.querySelector(
  "input[name=numPersonaje]"
) as HTMLInputElement | null;

// console.log(miBoton)

miBoton?.addEventListener("click", (event) => {
  if (!miInput) return;
  if (!miInput.value) return;

  // Aquí gestionamos el evento
  console.log(miInput.value);
  // Hacer la llamada a SWAPI
  buscarPersonaje(miInput.value);
});

if (miBoton) {
  miBoton.onclick = (event) => {};
  miBoton.onmouseover = (event) => {
    console.log("estoy haciendo hover");
    miBoton.style.backgroundColor = "yellow";
  };
  miBoton.onmouseleave = (event) => {
    console.log("estoy haciendo hover");
    miBoton.style.backgroundColor = "transparent";
  };
}

miInput?.addEventListener("keydown", (event) => {});
