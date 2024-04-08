import React, { useEffect, useState } from 'react';

const ProgressBar = ( dataInicio, dataTermino ) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const startDate = new Date(dataInicio);
    const endDate = new Date(dataTermino);
    const currentDate = new Date();

    const totalMilliseconds = endDate - startDate;
    const elapsedMilliseconds = currentDate - startDate;

    const calculatedPercentage = (elapsedMilliseconds / totalMilliseconds) * 100;

    setPercentage(calculatedPercentage > 100 ? 100 : calculatedPercentage);
  }, [dataInicio, dataTermino]); 

  let angulo = percentage * 3.6;
  return  {percentage, angulo} ;
};

export default ProgressBar;
