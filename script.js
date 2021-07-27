// Funcion contructora para consultorio
function Consultorio(nombre, paciente) {
    this.consultorioNombre = nombre;
    this.consultorioPaciente = paciente;
}
// funcion constructora para paciente
function Paciente(nombre, edad, rut, diagnostico) {
    var pacienteNombre = nombre;
    var pacienteEdad = edad;
    var pacienteRut = rut;
    var pacienteDiagnostico = diagnostico;

    Object.defineProperty(this, "nombre", {
        get: function () {
            return pacienteNombre;
        },
        set: function (nuevoNombre) {
            pacienteNombre = nuevoNombre;
        }
    });
    Object.defineProperty(this, "edad", {
        get: function () {
            return pacienteEdad;
        },
        set: function (nuevoEdad) {
            pacienteEdad = nuevoEdad;
        }
    });
    Object.defineProperty(this, "rut", {
        get: function () {
            return pacienteRut;
        },
        set: function (nuevoRut) {
            pacienteRut = nuevoRut;
        }
    });
    Object.defineProperty(this, "diagnostico", {
        get: function () {
            return pacienteDiagnostico;
        },
        set: function (nuevoDiagnostico) {
            pacienteDiagnostico = nuevoDiagnostico;
        }
    });
}

// Getters y Setters
Paciente.prototype.getNombre = function () {
    return this.pacienteNombre;
}
Paciente.prototype.setNombre = function (nombre) {
    this.pacienteNombre = nombre;
}
Paciente.prototype.getEdad = function () {
    return this.pacienteEdad;
}
Paciente.prototype.setEdad = function (edad) {
    this.pacienteEdad = edad;
}
Paciente.prototype.getRut = function () {
    return this.pacienteRut;
}
Paciente.prototype.setRut = function (rut) {
    this.pacienteRut = rut;
}
Paciente.prototype.getDiagnostico = function () {
    return this.pacienteDiagnostico;
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
    this.pacienteDiagnostico = diagnostico;
}
// Crear un método mediante la propiedad prototype que permita buscar los datos de
// los usuarios por nombre y otro método que permita mostrar todos los datos de los
// usuarios registrados.

// Datos nuevos
const paciente1 = new Paciente("Cintia", 17, "21.522.860-k", "Estrés");
const paciente2 = new Paciente("Fabian", 29, "18.001.145-5", "Demencia");
const consultorio1 = new Consultorio("Cesfam Santa Cruz", [paciente1, paciente2]);

// Metodo para mostrar todos los usuarios ingresados
Consultorio.prototype.mostrarPacientes = function () {
    console.log('Todos los pacientes del consultorio:');
    // For para recorrer todos los datos integrados
    for (var i = 0; i < this.consultorioPaciente.length; i++) {
        // console log para cada uno de los pacientes
        console.log('Nombre: ' + this.consultorioPaciente[i].nombre + ' - ' + 'Edad: ' + this.consultorioPaciente[i].edad + ' - ' + 'Rut: ' + this.consultorioPaciente[i].rut + ' - ' + 'Diagnóstico: ' + this.consultorioPaciente[i].diagnostico);
    }
}
// Mostrar todos los pacientes
consultorio1.mostrarPacientes();

// Metodo para buscar por paciente
Consultorio.prototype.buscaxNombre = function (nombre) {
    console.log('Buscar datos del paciente por nombre:');
    // for para recorrer los datos ingresados segun el nombre
    for (var i = 0; i < this.consultorioPaciente.length; i++) {
        if (nombre == this.consultorioPaciente[i].nombre) {
            console.log('Nombre: ' + this.consultorioPaciente[i].nombre + ' - ' + 'Edad: ' + this.consultorioPaciente[i].edad + ' - ' + 'Rut: ' + this.consultorioPaciente[i].rut + ' - ' + 'Diagnóstico: ' + this.consultorioPaciente[i].diagnostico);
        }
    }
}
// Buscar paciente llamado Fabian
consultorio1.buscaxNombre("Fabian");
// Otro paciente
// consultorio1.buscaxNombre("Cintia")