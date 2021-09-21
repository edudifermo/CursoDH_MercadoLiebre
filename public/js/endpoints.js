const ENDPOINTS ={
    PEDIDO:{
        BUSCAR= ".-pedido/buscar",
        CREAR: ".-pedido/buscar",
        ELIMINAR: ".-pedido/buscar",
        MODIFICAR: ".-pedido/buscar"
        },
        USUARIO:{
            PAGA:"usuario/paga",
            REGISTRA:"usuario/registra",
            BAJA:"usuario/baja"
        }

    }

Object.freeze(ENDPOINTS)
                     
module.exports = ENDPOINTS
