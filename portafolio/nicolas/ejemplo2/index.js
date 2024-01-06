// Datos de empleados
const mostrar = () => {

    const sexo = document.getElementById("lsgrupo").value
    const RH = document.getElementById("lsgrupo2").value
    const nombre = document.getElementById("txtNombre").value
    const Apellido = document.getElementById("txtApellido").value
    const edad = document.getElementById("txtEdad").value
    const empleados = [
        { nombre: nombre, Apellido: Apellido, edad: edad, grupo: sexo, grupo2: RH },
    ];
    // Crear tabla y agregar encabezados
    const tabla = document.createElement("table");
    const encabezados = ["Nombre", "apellido", "edad", "sexo", "RH"];
    const encabezadoRow = document.createElement("tr");
    encabezados.forEach(encabezado => {
        const th = document.createElement("th");
        th.textContent = encabezado;
        encabezadoRow.appendChild(th);
    });

    tabla.appendChild(encabezadoRow);

    // Agregar filas con datos de empleados
    empleados.forEach(empleado => {
        const fila = document.createElement("tr");

        const nombreCell = document.createElement("td");
        nombreCell.textContent = empleado.nombre;
        fila.appendChild(nombreCell);

        const ApellidoCell = document.createElement("td");
        ApellidoCell.textContent = `${empleado.Apellido}`;
        fila.appendChild(ApellidoCell);

        const edadCell = document.createElement("td");
        edadCell.textContent = empleado.edad
        fila.appendChild(edadCell);

        const grupoCell = document.createElement("td");
        grupoCell.textContent = empleado.grupo
        fila.appendChild(grupoCell)

        const grupo2Cell = document.createElement("td");
        grupo2Cell.textContent = empleado.grupo2
        fila.appendChild(grupo2Cell)

        tabla.appendChild(fila);
    });


    document.body.appendChild(tabla);
}
const borrar = () => {
location.reload();
}