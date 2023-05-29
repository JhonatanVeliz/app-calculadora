(() => {

    // Valores del display y los botones
    const operationDisplay = document.querySelector('#display');
    const btns = document.querySelectorAll('.boton');
    const btnClear = document.querySelector('.btn--clear');
    const btnDelete = document.querySelector('.btn--delete');
    const btnIgual = document.querySelector('.btn--result');
    const loader = document.querySelector('.loader');
    const btnLoader = document.querySelector('.btn--remove');

    // Funcion que al darle click a cada boton este aparezca en el display
    btns.forEach((e) => {
        e.addEventListener('click', () => {
            if (operationDisplay.textContent == 0 || operationDisplay.textContent === 'Invalido') {
                operationDisplay.textContent = e.textContent;
                return;
            }
            operationDisplay.textContent += e.textContent;
        })
    });
    // Funcion que limpia el display
    const clear = () => {
        operationDisplay.textContent = '0';
    };
    // Funcion que elimina una unidad
    const deleteUnidad = () => {
        if (operationDisplay.textContent.length === 1) {
            clear();
        } else {
            operationDisplay.textContent = operationDisplay.textContent.slice(0, -1);
        }
    }
    // Funcion que ejecuta el resultado de las operaciones
    const resultado = () => {

        try {
            operationDisplay.textContent = eval(display.textContent);
        } catch (error) {
            operationDisplay.textContent = 'Invalido';
        }

    }
    // Funcion que mueve el loader
    const loaderRemove = () => {
        loader.classList.add('loader--remove')
    };
    btnClear.addEventListener('click', clear);
    btnDelete.addEventListener('click', deleteUnidad);
    btnIgual.addEventListener('click', resultado);
    btnLoader.addEventListener('click', loaderRemove);

})();