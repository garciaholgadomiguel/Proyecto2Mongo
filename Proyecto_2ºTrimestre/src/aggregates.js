// [ 1º AGGREGATE ]
// Quiero que busque los pilotos con contrato fijo y que salga el nombre, 
// mas su año de nacimiento y su empleo


db.trabajadores.aggregate([
    
    {
        $match:{ContratoFijo :true, Empleo: "Piloto",}
    },
    {
        $group:
          {
            _id:{
                año:{$year:"$FechaNacimiento"},
                Nombre:"$Nombre",
                Empleo: "$Empleo",
                ContratoFijo: "$ContratoFijo"
                },
          }
       }

]).pretty()

// [ SOLUCION ]
/*

{
        "_id" : {
                "año" : 2000,
                "Nombre" : "Roberto",
                "Empleo" : "Piloto",
                "ContratoFijo" : true
        }
}
{
        "_id" : {
                "año" : 1969,
                "Nombre" : "Omar",
                "Empleo" : "Piloto",
                "ContratoFijo" : true
        }
}
{
        "_id" : {
                "año" : 1970,
                "Nombre" : "Paco",
                "Empleo" : "Piloto",
                "ContratoFijo" : true
        }
}

*/

// 2º [ AGGREGATE ]
// Cuanto gana la empresa Iberia en cuanto a Viajes y en cual se gana mas dinero

db.aviones.aggregate([
    
    {
        $match: {Aerolinea: "Iberia"}
    },
    {
        $project: {
            _id: 1,
            Aerolinea: 1,
            GananciasPorViaje: { $multiply: ["$Pasajeros", "$CosteBillete"] }
        }
    },
    {
        $sort: {GananciasViaje: -1}
    }
    
]).pretty()

// [ SOLUCION ]

/*

{
        "_id" : "AIRBUS 319",
        "Aerolinea" : [
                "Iberia",
                "Vueling"
        ],
        "GananciasPorViaje" : 31200
}
{
        "_id" : "AIRBUS 321",
        "Aerolinea" : [
                "Iberia",
                "British Airways"
        ],
        "GananciasPorViaje" : 26400
}
{
        "_id" : "AIRBUS 340",
        "Aerolinea" : "Iberia",
        "GananciasPorViaje" : 45900
}

*/

// 3º [ AGGREGATE ]
// Quiero saber cuanto dinero ganan los pilotos al año
db.empleos.aggregate([
    
    {
        $match: {_id: "Piloto"}
    },
    {
        $lookup: {
            from: "trabajadores",
            localField: "_id",
            foreignField: "Empleo",
            as: "Piloto"
        }
    },
    { $unwind: "$Piloto" },
    {
        $project: {
            _id: 0,
            DNI: "$Piloto._id",
            Nombre: "$Piloto.Nombre",
            Apellidos: "$Piloto.Apellidos",
            SueldoAlMes: "$Sueldo",
            SueldoAlAño: {$multiply: ["$Sueldo", 12]}
            
        }
    }
    
]).pretty()

// [ SOLUCION ]

/*

{
        "DNI" : "30280192E",
        "Nombre" : "Paco",
        "Apellidos" : "Fernandez Calvo",
        "SueldoAlMes" : 5000,
        "SueldoAlAño" : 60000
}
{
        "DNI" : "23158743J",
        "Nombre" : "Omar",
        "Apellidos" : "Icon Hernandez",
        "SueldoAlMes" : 5000,
        "SueldoAlAño" : 60000
}
{
        "DNI" : "25369874R",
        "Nombre" : "Roberto",
        "Apellidos" : "Martinez Pancho",
        "SueldoAlMes" : 5000,
        "SueldoAlAño" : 60000
}
{
        "DNI" : "78596321S",
        "Nombre" : "Antonio",
        "Apellidos" : "Ugarte Rodriguez",
        "SueldoAlMes" : 5000,
        "SueldoAlAño" : 60000
}

*/

// [ 4º AGGREGATE ]
// Quiero los vuelos donde viajen empleados de British Airways donde salga el cargo
// del empleado, la ruta y precio de ellos

db.aviones.aggregate([
    
    {
        $lookup: {
            from: "trabajadores",
            localField: "Aerolinea",
            foreignField: "Aerolinea",
            as: "Aerolinea"
        }
    },
    {   
        $unwind: "$Aerolinea" 
    },
    {
        $match: {"Aerolinea.Aerolinea": "British Airways"}
    },
    
    {
        $project: {
            _id: 1,
            Nombre: "$Aerolinea.Nombre",
            Cargo: "$Aerolinea.Empleo",
            Aerolinea: "$Aerolinea.Aerolinea",
            Salida: "$Origen",
            Llegada: "$Destino",
            PrecioBillete: "$CosteBillete"
        }
    }
  
]).pretty()

// [ SOLUCION ]

/*

{
        "_id" : "AIRBUS 321",
        "Nombre" : "Omar",
        "Cargo" : "Piloto",
        "Aerolinea" : "British Airways",
        "Salida" : "Tokio",
        "Llegada" : "Francia",
        "PrecioBillete" : 120
}
{
        "_id" : "AIRBUS 321",
        "Nombre" : "Carmen",
        "Cargo" : "Azafata",
        "Aerolinea" : "British Airways",
        "Salida" : "Tokio",
        "Llegada" : "Francia",
        "PrecioBillete" : 120
}
{
        "_id" : "AIRBUS 321",
        "Nombre" : "Kiki",
        "Cargo" : "MozoEquipaje",
        "Aerolinea" : "British Airways",
        "Salida" : "Tokio",
        "Llegada" : "Francia",
        "PrecioBillete" : 120
}
{
        "_id" : "AIRBUS 360",
        "Nombre" : "Omar",
        "Cargo" : "Piloto",
        "Aerolinea" : "British Airways",
        "Salida" : "Tailandia",
        "Llegada" : "China",
        "PrecioBillete" : 320
}
{
        "_id" : "AIRBUS 360",
        "Nombre" : "Carmen",
        "Cargo" : "Azafata",
        "Aerolinea" : "British Airways",
        "Salida" : "Tailandia",
        "Llegada" : "China",
        "PrecioBillete" : 320
}
{
        "_id" : "AIRBUS 360",
        "Nombre" : "Kiki",
        "Cargo" : "MozoEquipaje",
        "Aerolinea" : "British Airways",
        "Salida" : "Tailandia",
        "Llegada" : "China",
        "PrecioBillete" : 320
}

*/