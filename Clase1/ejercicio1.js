function mostrarLista(arreglo) {
    if (arreglo.length === 0) {
        console.log('lista vacía');
        return;
    }

    for(i=0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }

    console.log(`Longitud de la lista ${arreglo.length}`);
}

mostrarLista([]);
// mostrarLista([1,2,3]);