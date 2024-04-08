const obtenerFecha = () => {
  let fecha = document.getElementById('date_fecha');
  let valor = fecha.value;
  conectarApi(valor);
};

const conectarApi = (valor) => {
  const nasakey = 'IAv72cZ6g9xBjQjkPP4nkNf83EK4xjCbFrgHJkXk';
  const url = `https://api.nasa.gov/planetary/apod?api_key=${nasakey}&date=${valor}`;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarDatos(resultado));

  axios
    .get(url)
    .then((respuesta) => mostrarDatos(respuesta.data))
    .catch((error) => console.log(error));
};

const mostrarDatos = (data) => {
  //document.getElementById('pic_date').innerHTML = data.date;
  const title = document.getElementById('title');
  title.innerHTML = data.title;
  const expli = document.getElementById('explicacion');
  expli.innerHTML = data.explanation;
  const img = document.getElementById('fotografia');
  img.src = data.url;
  return data;
};
