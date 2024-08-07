import { useState, useEffect } from 'react';

function useInactivityTime(time) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let timeout;

    // Función que resetea el timeOut
    const resetTimeout = () => {
      clearTimeout(timeout); // Limpiamos el timeOut
      timeout = setTimeout(() => setInactive(true), time); // Creamos un nuevo timeOut
    };

    // Lista de eventos que resetean el timeOut
    const events = [
      'load',
      'mousemove',
      'mousedown',
      'click',
      'scroll',
      'keypress',
    ];

    // Inicialización de eventos que resetean el timeOut
    events.forEach((event) => document.addEventListener(event, resetTimeout));

    // Limpieza de eventos cuando se desmonta el componente
    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, resetTimeout)
      );
    };
  }, [time]);
  return inactive;
}

export default useInactivityTime;