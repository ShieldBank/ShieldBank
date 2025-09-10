import React, { useState, useEffect } from 'react';

function CurrentDate() {
  const [dataAtual, setDataAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDataAtual(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });



  return (
    <div>
      <h1>{dataFormatada}
        <span>   {dataAtual.toLocaleTimeString('pt-BR')}</span>
      </h1>
    </div>
  );
}

export {CurrentDate};