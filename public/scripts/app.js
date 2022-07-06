
const listaProyectos = [
]




let tBody = document.createElement('tbody');

const actualizarTabla = () => {
    tBody.remove();
    tBody = document.createElement('tbody');
    let col;

    listaProyectos.forEach((elemento) => {
        let row = document.createElement('tr');
        row.classList.add('bg-slate-900', 'border-b');

        col = document.createElement('td');
        col.classList.add('px-6', 'py-4');
        col.textContent = elemento.codigo;
        row.appendChild(col);
        col = document.createElement('td');
        col.classList.add('px-6', 'py-4');
        col.textContent = elemento.nombre;
        row.appendChild(col);
        col = document.createElement('td');
        col.classList.add('px-6', 'py-4');
        col.textContent = elemento.responsable;
        row.appendChild(col);
        col = document.createElement('td');
        col.classList.add('px-6', 'py-4');
        col.textContent = elemento.fInicion;
        row.appendChild(col);
        col = document.createElement('td');
        col.classList.add('px-6', 'py-4');
        col.textContent = elemento.fFin;
        row.appendChild(col);
        col = document.createElement('td');
        col.classList.add('px-6', 'py-4');
        col.textContent = elemento.diasEjecucion;
        row.appendChild(col);
        tBody.appendChild(row);
    });
    document.getElementById('table').appendChild(tBody);
}

const modificarProyecto = (codigo, nombre, tipoProyecto, responsable, presupuesto, fInicion, fFin, diasEjecucion, tipoPersona, tipoProfesor, semestre_estudiante) => {
    const proyecto = listaProyectos.find(proyecto => proyecto.codigo == codigo);

    listaProyectos.splice(listaProyectos.indexOf(proyecto), 1, { codigo: codigo, nombre: nombre, tipoProyecto: tipoProyecto, responsable: responsable, presupuesto: presupuesto, fInicion: fInicion, fFin: fFin, diasEjecucion: diasEjecucion, tipoPersona: tipoPersona, tipoProfesor: tipoProfesor, semestre_estudiante: semestre_estudiante });
}
const agregarProyecto = (codigo, nombre, tipoProyecto, responsable, presupuesto, fInicion, fFin, diasEjecucion, tipoPersona, tipoProfesor, semestre_estudiante) => {

    if (listaProyectos.find(proyecto => proyecto.codigo == codigo)) {
        alert('Este codigo ya esta registrado')
    } else {
        listaProyectos.push({ codigo: codigo, nombre: nombre, tipoProyecto: tipoProyecto, responsable: responsable, presupuesto: presupuesto, fInicion: fInicion, fFin: fFin, diasEjecucion: diasEjecucion, tipoPersona: tipoPersona, tipoProfesor: tipoProfesor, semestre_estudiante: semestre_estudiante });
    }
}

const eliminarProyecto = (codigo) => {
    const elemento = listaProyectos.find(proyecto => proyecto.codigo == codigo);
    if (elemento) {
        listaProyectos.splice(listaProyectos.indexOf(elemento), listaProyectos.indexOf(elemento) + 1)
        alert('Eliminado');
    } else {
        alert('No existe un proyecto con ese id');
    }
}

const mostrarProyecto = (codigo) => {
    const elemento = listaProyectos.find(proyecto => proyecto.codigo == codigo);
    if (elemento) {
        document.getElementById('ventanaOpaca').classList.remove('hidden');
        document.getElementById('codigoVentanaEmergente').textContent = elemento.codigo;
        document.getElementById('nombreVentanaEmergente').textContent = elemento.nombre;
        document.getElementById('tipoProyectoVentanaEmergente').textContent = elemento.tipoProyecto;
        document.getElementById('responsableVentanaEmergente').textContent = elemento.responsable;
        document.getElementById('presupuestoVentanaEmergente').textContent = elemento.presupuesto;
        document.getElementById('fInicionVentanaEmergente').textContent = elemento.fInicion;
        document.getElementById('fFinVentanaEmergente').textContent = elemento.fFin;
        document.getElementById('diasEjecucionVentanaEmergente').textContent = elemento.diasEjecucion;
        document.getElementById('tipoPersonaVentanaEmergente').textContent = elemento.tipoPersona;
        if (document.getElementById('tipoPersonaVentanaEmergente').textContent == "Estudiante") {
            document.getElementById('semestreEstudianteVentanaEmergente').textContent = elemento.semestre_estudiante;
            document.getElementById('contenedorTipoProfesorVentanaEmergente').classList.add('hidden');
            document.getElementById('contenedorSemestreEstudianteVentanaEmergente').classList.remove('hidden');
        } else {
            document.getElementById('tipoProfesorVentanaEmergente').textContent = elemento.tipoProfesor;
            document.getElementById('contenedorTipoProfesorVentanaEmergente').classList.remove('hidden');
            document.getElementById('contenedorSemestreEstudianteVentanaEmergente').classList.add('hidden');
        }
    } else {
        alert('No existe un proyecto con ese id');
    }
}

//Eventos
document.getElementById('botonEliminarInterfaz').addEventListener('click', () => {
    const valor = document.getElementById('inputIdProyecto').value.trim();
    if (valor) {
        eliminarProyecto(valor);
        actualizarTabla();
    } else {
        alert('Debe llenar el campo');
    }

})
document.getElementById('botonAgregar').addEventListener('click', () => {

    const codigo = document.getElementById('inputCodigoProyecto').value.trim();
    const nombre = document.getElementById('inputNombreProyecto').value.trim();
    const tipo = (document.getElementById('inputTipoProyecto').selectedOptions[0].textContent != "Seleccione") ? document.getElementById('inputTipoProyecto').selectedOptions[0].textContent : undefined;
    const fechaInicio = document.getElementById('inputFechaInicioProyecto').value;
    const fechaFinal = document.getElementById('inputFechaFinalizacionProyecto').value;
    const responsable = document.getElementById('inputResponsable').value.trim();
    const presupuesto = document.getElementById('inputPresupuesto').value.trim();
    const diasEjecucion = document.getElementById('inputDiasEjecucionProyecto').value.trim();
    const Tipo_persona = (document.getElementsByName('persona')[0].checked) ? "Estudiante" : (document.getElementsByName('persona')[1].checked) ? "Profesor" : undefined;
    const Tipo_profesor = (document.getElementById('inputTipoProfesor').selectedOptions[0].textContent != "Seleccione") ? document.getElementById('inputTipoProfesor').selectedOptions[0].textContent : undefined;
    const Semestre_estudiante = (document.getElementById('inputSemestreEstudiante').selectedOptions[0].textContent != "Seleccione") ? document.getElementById('inputSemestreEstudiante').selectedOptions[0].textContent : undefined;

    if (codigo && nombre && tipo && fechaInicio && fechaFinal && responsable && presupuesto && diasEjecucion && Tipo_persona && (Tipo_profesor || Semestre_estudiante)) {

        const fechaInicialVal = new Date('01-01-2022')
        const fechaFinalVal = new Date('12-30-2022')
        if (new Date(fechaInicio) < fechaInicialVal || new Date(fechaFinal) < fechaInicialVal || fechaFinalVal < new Date(fechaFinal)) {
            alert('La fecha de inicio y final debe ser mayor que 01-01-2022 y la fecha final debe ser menor que 31-12-2022')
        } else {
            if (Number(presupuesto) < 10000000 || Number(presupuesto) > 50000000) {
                alert('El presupuesto debe ser menor que de 50.000.000 y mayor que 10.000.000')
            } else {
                agregarProyecto(codigo, nombre, tipo, responsable, presupuesto, fechaInicio, fechaFinal, diasEjecucion, Tipo_persona, Tipo_profesor, Semestre_estudiante);
                actualizarTabla();
            }
        }
    } else {
        alert('Debe llenar todos los campos');
    }

})

document.getElementById('botonVerInterfaz').addEventListener('click', () => {
    const valor = document.getElementById('inputVerProyecto').value.trim();
    if (valor) {
        mostrarProyecto(valor);
    } else {
        alert('Debe llenar el campo');
    }

})

document.getElementById('botonEditarInterfaz2').addEventListener('click', () => {
    const codigo = document.getElementById('inputCodigoProyecto').value.trim();
    const nombre = document.getElementById('inputNombreProyecto').value.trim();
    const tipo = (document.getElementById('inputTipoProyecto').selectedOptions[0].textContent != "Seleccione") ? document.getElementById('inputTipoProyecto').selectedOptions[0].textContent : undefined;
    const fechaInicio = document.getElementById('inputFechaInicioProyecto').value;
    const fechaFinal = document.getElementById('inputFechaFinalizacionProyecto').value;
    const responsable = document.getElementById('inputResponsable').value.trim();
    const presupuesto = document.getElementById('inputPresupuesto').value.trim();
    const diasEjecucion = document.getElementById('inputDiasEjecucionProyecto').value.trim();
    const Tipo_persona = (document.getElementsByName('persona')[0].checked) ? "Estudiante" : (document.getElementsByName('persona')[1].checked) ? "Profesor" : undefined;
    const Tipo_profesor = (document.getElementById('inputTipoProfesor').selectedOptions[0].textContent != "Seleccione") ? document.getElementById('inputTipoProfesor').selectedOptions[0].textContent : undefined;
    const Semestre_estudiante = (document.getElementById('inputSemestreEstudiante').selectedOptions[0].textContent != "Seleccione") ? document.getElementById('inputSemestreEstudiante').selectedOptions[0].textContent : undefined;

    if (codigo && nombre && tipo && fechaInicio && fechaFinal && responsable && presupuesto && diasEjecucion && Tipo_persona && (Tipo_profesor || Semestre_estudiante)) {

        const fechaInicialVal = new Date('01-01-2022')
        const fechaFinalVal = new Date('12-30-2022')
        if (new Date(fechaInicio) < fechaInicialVal || new Date(fechaFinal) < fechaInicialVal || fechaFinalVal < new Date(fechaFinal)) {
            alert('La fecha de inicio y final debe ser mayor que 01-01-2022 y la fecha final debe ser menor que 31-12-2022')
        } else {
            if (Number(presupuesto) < 10000000 || Number(presupuesto) > 50000000) {
                alert('El presupuesto debe ser menor que de 50.000.000 y mayor que 10.000.000')
            } else {
                modificarProyecto(codigo, nombre, tipo, responsable, presupuesto, fechaInicio, fechaFinal, diasEjecucion, Tipo_persona, Tipo_profesor, Semestre_estudiante);
                actualizarTabla();
                document.getElementById('botonEditarInterfaz2').classList.add('hidden');
                document.getElementById('botonAgregar').classList.remove('hidden');
            }

        }
    } else {
        alert('Debe llenar todos los campos');
    }
});
document.getElementById('botonEditarInterfaz').addEventListener('click', () => {
    const valor = document.getElementById('inputIdProyectoEditar').value.trim();
    if (valor) {
        const proyect = listaProyectos.find(proyecto => proyecto.codigo == valor);
        if (proyect) {
            document.getElementById('inputCodigoProyecto').value = proyect.codigo;
            document.getElementById('inputNombreProyecto').value = proyect.nombre;
            (proyect.tipoProyecto == "Investigación") ? document.getElementById('inputTipoProyecto').selectedIndex = 1 : document.getElementById('inputTipoProyecto').selectedIndex = 2;
            document.getElementById('inputFechaInicioProyecto').value = proyect.fInicion;
            document.getElementById('inputFechaFinalizacionProyecto').value = proyect.fFin;
            document.getElementById('inputResponsable').value = proyect.responsable;
            document.getElementById('inputPresupuesto').value = proyect.presupuesto;
            document.getElementById('inputDiasEjecucionProyecto').value = proyect.diasEjecucion;
            (proyect.tipoPersona == "Estudiante") ? document.getElementsByName('persona')[0].click() : document.getElementsByName('persona')[1].click();
            (proyect.tipoProfesor == "Planta") ? document.getElementById('inputTipoProfesor').selectedIndex = 1 : document.getElementById('inputTipoProfesor').selectedIndex = 2;

            const combo = document.getElementById('inputSemestreEstudiante');
            for (let i = 0; i < combo.length; i++) {
                if (combo.options[i].textContent == proyect.semestre_estudiante) {
                    document.getElementById('inputSemestreEstudiante').selectedIndex = i;
                    break;
                }
            }
            ventanaEliminar.classList.add('hidden');
            ventanaAgregar.classList.remove('hidden');
            ventanaVer.classList.add('hidden');
            ventanaEditar.classList.add('hidden');
            document.getElementById('botonEditarInterfaz2').classList.remove('hidden');
            document.getElementById('botonAgregar').classList.add('hidden');
        } else {
            alert('No existe proyecto con ese id')
        }
    } else {
        alert('Debe llenar el campo');
    }

})



