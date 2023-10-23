document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('clientes-table');
  
    // Hacer una solicitud GET a la API para obtener la lista de clientes
    fetch('/api/clientes', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        data.forEach(cliente => {
          // Crear una fila para cada cliente
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error al obtener la lista de clientes', error);
      });
  });
  