let datos = ["gato", "perro", "loro", "iguana", "lagarto", "canario", "pez" ];

console.log("Que animales tenemos por la zona:");
for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}


datos.push("Cocodrilo");

console.log("Se agrego un nuevo animal, ahora tenemos estos animales por la zona:");
for (let i = 0; i < datos.length; i++) {
  console.log(datos[i]);
}