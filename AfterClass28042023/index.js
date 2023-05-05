/*const type = "cocacola"
let bebida

switch (type) {
    case 'gaseosa':
        bebida = 'Soy una gaseosa'
        break;
    case 'pepsi':
        bebida = 'Soy una pepsi'
        break;
    case 'cocacola':
        bebida = 'Soy una cocacola'
        break;
    default:
        break;
}

console.log(bebida)*/

function getBebida(type) {
    const bebidas = {
        'gaseosa': () => {
            return 'Soy una gaseosa'
        },
        'pepsi': () => {
            return 'Soy una pepsi'
        },
        'cocacola': () => {
            return 'Soy una cocacola'
        },
        'default': () => {
            return 'Bebida desconocida'
        }
    }

    return (bebidas[type] || bebidas['default'])()
}

const resultado = getBebida('asdjkfhasjdkfahs')
console.log(resultado)
