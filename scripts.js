const calcula = () => {
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    if (peso === '') {
        alert('Preencha o campo peso')
        return
    }

    if (!isNumeric(peso)) {
        alert('Campo peso preenchido incorretamente')
        document.getElementById('peso').value = ''
        return
    }

    if (altura === '') {
        alert('Preencha o campo altura')
        return
    }

    if (!isNumeric(altura)) {
        alert('Campo altura preenchido incorretamente')
        document.getElementById('altura').value = ''
        return
    }

    const imc = (peso / (altura ** 2)).toFixed(1)
    let resultado

    if (imc < 18.5) {
        resultado = 'Magreza'
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Normal'
    } else if (imc >= 24.9 && imc < 30.0) {
        resultado = 'Sobrepeso'
    } else {
        resultado = 'Obesidade'
    }
    
    alert(resultado)
}

const limpa = () => {
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}

const isNumeric = (value) => {
    return !isNaN(parseFloat(value.replace(',', '.'))) && isFinite(value.replace(',', '.'));
}