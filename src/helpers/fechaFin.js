function sumarDias(fecha, dias) {
  const nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}

function formatDate(fecha) {
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const año = fecha.getFullYear();

  return(`${año}-${mes}-${dia}`);
}

const FinalDate = (date, duration) => {
  let diasPorSemana = duration * 7;
  let diasHabiles = 0;
  let fecha = new Date(date);

  for (let i = 1; i <= diasPorSemana; i++) {
    let nuevaFecha = sumarDias(fecha, i);
    let diaDeLaSemana = nuevaFecha.getDay();

    // Si el día de la semana no es sábado (6) ni domingo (0), lo consideramos un día hábil
    if (diaDeLaSemana !== 6 && diaDeLaSemana !== 0) {
      diasHabiles++;
    }
  }

  let fechaFinalSinFinesDeSemana = sumarDias(date, diasHabiles); 

  // Ahora, agregamos los fines de semana excluidos a la fecha final
  let diasFinesDeSemana = diasPorSemana - diasHabiles;
  let fechaFinal = sumarDias(fechaFinalSinFinesDeSemana, diasFinesDeSemana);

  return formatDate(fechaFinal);
}

export default FinalDate;