const fs = require('fs');

fs.writeFile('./info-callback.txt', 'Hola mundo estoy trabajando con archivos usando callbacks',
    error => {
        if (error) {
            throw new Error(`Error en la creación del archivo: ${error}`)
        }

        fs.readFile('./info-callback.txt', 'utf-8', (error, contenido) => {
            if (error) {
                throw new Error(`Error en la lectura del archivo: ${error}`)
            }

            console.log(contenido);

            fs.appendFile('./info-callback.txt', '\nMás contenido', error => {
                if (error) {
                    throw new Error(`Error en la actualización del archivo: ${error}`)
                }

                fs.readFile('./info-callback.txt', 'utf-8', (error, contenido) => {
                    if (error) {
                        throw new Error(`Error en la lectura del archivo: ${error}`)
                    }

                    console.log(contenido);

                    fs.unlink('./info-callback.txt', error => {
                        if (error) {
                            throw new Error(`Error en la eliminación del archivo: ${error}`)
                        }
                    })
                })
            })
        })
    }
)