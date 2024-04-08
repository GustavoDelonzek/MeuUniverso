import React, { useState, useEffect } from 'react';

const Temporizador = (dataTermino ) => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    

    const calcularContagemRegressiva = () => {
      const dataFim = new Date(dataTermino);
      const diaHoje = new Date();
      const totalSegundos = Math.max((dataFim - diaHoje) / 1000, 0);

      setDias(Math.floor(totalSegundos / 3600 / 24));
      setHoras(Math.floor(totalSegundos / 3600) % 24);
      setMinutos(Math.floor(totalSegundos / 60) % 60);
      setSegundos(Math.floor(totalSegundos) % 60);
    };

    const intervalId = setInterval(calcularContagemRegressiva, 1000);

    calcularContagemRegressiva(); 

    return () => clearInterval(intervalId);
  }, [dataTermino]);

  return {dias, horas, minutos, segundos};
};

export default Temporizador;
