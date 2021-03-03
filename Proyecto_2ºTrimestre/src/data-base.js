// Coleccion que almacena la info de cada empleo
db.empleos.insertMany([

    {
        _id: "Piloto",
        Horario: ["Lunes","Martes","Miercoles","Jueves","Viernes"],
        Sueldo: 5000,
    },

    {
        _id: "Azafata",
        Horario: ["Lunes","Martes","Miercoles","Jueves","Viernes"],
        Sueldo: 2000,
    },

    {
        _id: "Limpiador",
        Horario: ["Lunes","Miercoles","Viernes"],
        Sueldo: 1700,
    },

    {
        _id: "MozoEquipaje",
        Horario: ["Lunes","Martes","Miercoles","Jueves","Viernes"],
        Sueldo: 1900,
    },

])

// Coleccion que guarda los vuelos y sus compañias
db.aviones.insertMany([

    {
        _id: "AIRBUS 319",
        Aerolinea: ["Iberia","Vueling"],
        Pasajeros: 156,
        CosteBillete: 200,
        AutonomiaKm: 7200,
        Origen: "Sevilla",
        Destino: "Irlanda"
    },

    {
        _id: "AIRBUS 321",
        Aerolinea: ["Iberia","British Airways"],
        Pasajeros: 220,
        CosteBillete: 120,
        AutonomiaKm: 5600,
        Origen: "Tokio",
        Destino: "Francia"
    },

    {
        _id: "AIRBUS 340",
        Aerolinea: "Iberia",
        Pasajeros: 270,
        CosteBillete: 170,
        AutonomiaKm: 14630,
        Origen: "New York",
        Destino: "Londres"
    },

    {
        _id: "AIRBUS 360",
        Aerolinea: ["British Airways","Air Lingus"],
        Pasajeros: 500,
        CosteBillete: 320,
        AutonomiaKm: 4630,
        Origen: "Tailandia",
        Destino: "China"
    },
])

// Coleccion con los trabajadores y toda su informacion
db.trabajadores.insertMany([

    {
        _id: "30280192E",
       Nombre: "Paco",
       Apellidos: "Fernandez Calvo",
       FechaNacimiento: new Date("1970-05-12"),
       Empleo: "Piloto",
       Aerolinea: "Iberia",
       RasgosFisicos: {
        Pelo: "Rubio",
        EstaturaCm: 1.78,
        PesoKg: 80,
       },
       ContratoFijo: true
      
    },

    {
        _id: "23569478W",
       Nombre: "Marta",
       Apellidos: "García Pons",
       FechaNacimiento: new Date("1988-04-12"),
       Empleo: "Azafata",
       Aerolinea: "Iberia",
       RasgosFisicos: {
        Pelo: "Morena",
        EstaturaCm: 1.70,
        PesoKg: 65,
       },
       ContratoFijo: false
      
    },

    {
        _id: "12458796M",
       Nombre: "Carlos",
       Apellidos: "Ruiz Hidalgo",
       FechaNacimiento: new Date("1972-06-05"),
       Empleo: "MozoEquipaje",
       Aerolinea: "Iberia",
       RasgosFisicos: {
        Pelo: "Castaño",
        EstaturaCm: 1.85,
        PesoKg: 92,
       },
       ContratoFijo: false
      
    },

    {
        _id: "23158743J",
       Nombre: "Omar",
       Apellidos: "Icon Hernandez",
       FechaNacimiento: new Date("1969-06-07"),
       Empleo: "Piloto",
       Aerolinea: "British Airways",
       RasgosFisicos: {
        Pelo: "Negro",
        EstaturaCm: 1.79,
        PesoKg: 85,
       },
       ContratoFijo: true
    },

    {
        _id: "89563412U",
       Nombre: "Pepe",
       Apellidos: "Calderon Ruiz",
       FechaNacimiento: new Date("1989-06-25"),
       Empleo: "Limpiador",
       RasgosFisicos: {
        Pelo: "Negro",
        EstaturaCm: 1.68,
        PesoKg: 75,
       },
       ContratoFijo: false
    },

    {
        _id: "96253417O",
       Nombre: "Clara",
       Apellidos: "Rima Peña",
       FechaNacimiento: new Date("1990-08-03"),
       Empleo: "Azafata",
       Aerolinea: "Vueling",
       RasgosFisicos: {
        Pelo: "Rubio",
        EstaturaCm: 1.75,
        PesoKg: 75,
       },
       ContratoFijo: false
    },

    {
        _id: "25369874R",
       Nombre: "Roberto",
       Apellidos: "Martinez Pancho",
       FechaNacimiento: new Date("2000-11-09"),
       Empleo: "Piloto",
       Aerolinea: "Air Lingus",
       RasgosFisicos: {
        Pelo: "Moreno",
        EstaturaCm: 1.85,
        PesoKg: 80,
       },
       ContratoFijo: true
    },

    {
        _id: "78596321S",
       Nombre: "Antonio",
       Apellidos: "Ugarte Rodriguez",
       FechaNacimiento: new Date("1975-07-13"),
       Empleo: "Piloto",
       Aerolinea: "Vueling",
       RasgosFisicos: {
        Pelo: "Rubio",
        EstaturaCm: 1.80,
        PesoKg: 90,
       },
       ContratoFijo: false
    },

    {
        _id: "14258963Y",
       Nombre: "Claudia",
       Apellidos: "Gutierrez Jaime",
       FechaNacimiento: new Date("1995-01-25"),
       Empleo: "Azafata",
       Aerolinea: "Iberia",
       RasgosFisicos: {
        Pelo: "Negro",
        EstaturaCm: 1.70,
        PesoKg: 72,
       },
       ContratoFijo: true
    },

    {
        _id: "25369214L",
       Nombre: "Ana",
       Apellidos: "Conde García",
       FechaNacimiento: new Date("1998-08-30"),
       Empleo: "Azafata",
       Aerolinea: "Vueling",
       RasgosFisicos: {
        Pelo: "Rubia",
        EstaturaCm: 1.69,
        PesoKg: 78,
       },
       ContratoFijo: true
    },

    {
        _id: "36987412X",
       Nombre: "Carmen",
       Apellidos: "Gomez Martin",
       FechaNacimiento: new Date("2000-10-08"),
       Empleo: "Azafata",
       Aerolinea: "British Airways",
       RasgosFisicos: {
        Pelo: "Morena",
        EstaturaCm: 1.62,
        PesoKg: 64,
       },
       ContratoFijo: false
    },

    {
        _id: "14785236G",
       Nombre: "Lucia",
       Apellidos: "Curra Benitez",
       FechaNacimiento: new Date("1996-04-17"),
       Empleo: "Azafata",
       Aerolinea: "Air Lingus",
       RasgosFisicos: {
        Pelo: "Negro",
        EstaturaCm: 1.60,
        PesoKg: 70,
       },
       ContratoFijo: false
    },

    {
        _id: "14368259V",
       Nombre: "Natalia",
       Apellidos: "Rodriguez Suarez",
       FechaNacimiento: new Date("1994-07-15"),
       Empleo: "Azafata",
       Aerolinea: "Air Lingus",
       RasgosFisicos: {
        Pelo: "Rojo",
        EstaturaCm: 1.75,
        PesoKg: 71,
       },
       ContratoFijo: true
    },

    {
        _id: "14789632P",
       Nombre: "Antonio",
       Apellidos: "Martin Mateo",
       FechaNacimiento: new Date("1985-05-05"),
       Empleo: "MozoEquipaje",
       Aerolinea: "Vueling",
       RasgosFisicos: {
        Pelo: "Rubio",
        EstaturaCm: 1.80,
        PesoKg: 92,
       },
       ContratoFijo: false
    },

    {
        _id: "143657236T",
       Nombre: "Kiki",
       Apellidos: "Holgado Rios",
       FechaNacimiento: new Date("1988-06-13"),
       Empleo: "MozoEquipaje",
       Aerolinea: "British Airways",
       RasgosFisicos: {
        Pelo: "Castaño",
        EstaturaCm: 1.75,
        PesoKg: 73,
       },
       ContratoFijo: true
    },

    {
        _id: "14852736B",
       Nombre: "Carlos",
       Apellidos: "Fernandez Jurado",
       FechaNacimiento: new Date("1979-10-14"),
       Empleo: "MozoEquipaje",
       Aerolinea: "Air Lingus",
       RasgosFisicos: {
        Pelo: "Negro",
        EstaturaCm: 1.80,
        PesoKg: 70,
       },
       ContratoFijo: true
    },

    {
        _id: "36985124K",
       Nombre: "Marta",
       Apellidos: "Ruiz Fabian",
       FechaNacimiento: new Date("1979-05-20"),
       Empleo: "Limpiador",
       RasgosFisicos: {
        Pelo: "Rubia",
        EstaturaCm: 1.69,
        PesoKg: 80,
       },
       ContratoFijo: true
    },
])




