/*
  =======================================
  1. ESPERAR A QUE EL DOM ESTÉ CARGADO
  =======================================
*/
// Esta línea asegura que tu código JS se ejecute solo cuando 
// todos los elementos HTML (el DOM) hayan sido cargados.
document.addEventListener('DOMContentLoaded', function() {
    
    console.log("El DOM está completamente cargado y listo.");

    // ======================================
    // 2. EJEMPLO DE CÓDIGO BÁSICO
    // ======================================
    
    // Obtener un elemento del HTML por su ID
    const tituloPrincipal = document.getElementById('main-title');
    
    if (tituloPrincipal) {
        // Modificar el texto del elemento
        // tituloPrincipal.textContent = '¡Título Modificado con JS!';
    }
    
    // ======================================
    // 3. AQUÍ VA EL RESTO DE TU LÓGICA
    // ======================================

});