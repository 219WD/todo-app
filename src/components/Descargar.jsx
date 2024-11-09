import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'

export const Descargar = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    // Manejar el evento 'beforeinstallprompt'
    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault(); // Prevenir la visualización automática del prompt
            setDeferredPrompt(e); // Guardar el evento para usarlo más tarde
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleAddToHomeScreen = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); // Mostrar el prompt de instalación
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('El usuario aceptó instalar la aplicación.');
                } else {
                    console.log('El usuario rechazó instalar la aplicación.');
                }
                setDeferredPrompt(null); // Limpiar el evento después de su uso
            });
        }
    };
    return (
        <>
            <img src={Logo} alt="Logo" className='Logo' />
            <button className='download' onClick={handleAddToHomeScreen}>
                Descargar Aplicacion
            </button>
        </>

    )
}