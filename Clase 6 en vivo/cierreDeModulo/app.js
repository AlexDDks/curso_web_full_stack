const autos = require('./autos')

const concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        for (let i = 0; i < this.autos.length; i++) {

            if (autos[i].patente === patente) {
                return autos[i]
            }
            else if (autos[i + 1].patente === patente) {
                return autos[i + 1]
            }
            else {
                return (null)
            }
        }
    },

    venderAuto: function (patente) {
        let variable = this.buscarAuto(patente)
        return variable.vendido = true
    },

    autosParaLaVenta: function () {
        let autosParaVenta1 = this.autos.filter(function (item) {
            return item.vendido == false;
        })
        return autosParaVenta1
    },


    autosNuevos: function () {
        let autosNuevos1 = this.autosParaLaVenta().filter(function (item) {
            return item.km <= 100
        })
        return autosNuevos1
    },

    listaDeVentas: function () {

        let autosVendidos = autos.filter(function (item) {
            return item.vendido == true
        })


        if (autosVendidos == undefined) {
            return autosVendidos = []
        }
        else {
            let x = 0;
            for (let i = 0; i < 2; i++) {
                x = x + autosVendidos[i].precio
            }

        }

    }
}

console.log(concesionaria.listaDeVentas())
