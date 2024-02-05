# Desafío 4 - Inmobiliaria 🏡

En este desafío, he implementado la renderización dinámica de propiedades inmobiliarias y aplicado estilos a partir de condicionales utilizando arreglos y objetos.

## Estructura del Código 🧱

El código JavaScript está organizado en dos arreglos, `propiedades_venta` y `propiedades_alquiler`, que representan propiedades en venta y alquiler, respectivamente. Estos arreglos contienen objetos con información detallada sobre cada propiedad.

## Resultado Final

### Escritorio
![Captura de pantalla](./Screenshot-index.png)

![Captura de pantalla](./Screenshot-ventas.png)

### Propiedades en Venta 💸

```javascript
const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
  },
...
```

### Propiedades en Alquiler 💸

```javascript
const propiedades_alquiler = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true
  },
...
```

## Renderización y Estilos 🖌️

La renderización de las propiedades se realiza dinámicamente utilizando ciclos, interpolación y el método innerHTML. Además, se aplican condicionales para gestionar la información sobre si se permite fumar o tener mascotas en cada propiedad.

```javascript
let validacionYTemplate = (tipoDePropiedad, numeroDeIteraciones, contenedorTemplate, template) => {
  for (let i = 0; i < numeroDeIteraciones; i++) {
    if (tipoDePropiedad[i].smoke === false) {
      tipoDePropiedad[i].smoke = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    } else {
      tipoDePropiedad[i].smoke = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    }

    if (tipoDePropiedad[i].pets === false) {
      tipoDePropiedad[i].pets = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
    } else {
      tipoDePropiedad[i].pets = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
    }

    template += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${tipoDePropiedad[i].src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${tipoDePropiedad[i].nombre}
            </h5>
            <p class="card-text">
              ${tipoDePropiedad[i].descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${tipoDePropiedad[i].ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${tipoDePropiedad[i].habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${tipoDePropiedad[i].banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${tipoDePropiedad[i].costo}</p>
              ${tipoDePropiedad[i].smoke}
              ${tipoDePropiedad[i].pets}
          </div>
        </div>
      </div>
    `;
  }
  contenedorTemplate.innerHTML = template
}
```

## Limitación de Propiedades en la Página Principal ✋

En la página index.html, se muestran solo 3 propiedades en venta y 3 propiedades en alquiler. Se proporcionan enlaces para ver más propiedades en cada categoría.