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
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Casa moderna con piscina',
    src: 'https://img.freepik.com/fotos-premium/casa-moderna-piscina-vista-al-jardin_865967-3242.jpg',
    descripcion: 'Hermosa casa moderna con piscina para disfrutar del verano.',
    ubicacion: '123 Sun Street, Sunnyville, CA 12345',
    habitaciones: 5,
    banos: 3,
    costo: 6000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Loft ubicado en el centro de la ciudad',
    src: 'https://imganuncios.mitula.net/arriendo_departamento_santiago_loft_en_arriendo_metro_parque_bustamante_1_dormitorios_46_00_m2_4810131700397920122.jpg',
    descripcion: 'Increible loft espacioso y moderno en el corazón de la ciudad.',
    ubicacion: '456 Urban Avenue, City Center, CA 67890',
    habitaciones: 1,
    banos: 1,
    costo: 2500,
    smoke: true,
    pets: false
  },
  {
    nombre: 'Casa rural con jardín',
    src: 'https://www.ruralesdata.com/cache/alojamientos/aguirre-casa-rural/202-aguirre-casa-rural-elizondo-fachada.jpg',
    descripcion: 'Encantadora casa rural con un hermoso jardín para relajarse.',
    ubicacion: '789 Countryside Lane, Green Hills, CA 54321',
    habitaciones: 3,
    banos: 2,
    costo: 3000,
    smoke: true,
    pets: true
  }
];

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
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Estudio céntrico con terraza',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_784123-MLC73923563488_012024-O.webp',
    descripcion: 'Estudio moderno en el corazón de la ciudad con una hermosa terraza.',
    ubicacion: '789 Downtown Avenue, Urban Center, CA 34567',
    habitaciones: 1,
    banos: 1,
    costo: 1800,
    smoke: true,
    pets: false
  },
  {
    nombre: 'Casa adosada con patio',
    src: 'https://www.losalamosdesanjuan.es/wp-content/uploads/2020/05/Patio-exterior.jpg',
    descripcion: 'Casa adosada espaciosa con un hermoso patio para disfrutar al aire libre.',
    ubicacion: '234 Garden Lane, Green Suburb, CA 89012',
    habitaciones: 4,
    banos: 2,
    costo: 2800,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Piso luminoso en área residencial',
    src: 'https://www.engelvoelkers.com/images/489347d0-10bb-406e-b943-5ffc7ac112c2/departamento-luminoso-y-exclusivo-a-estrenar--00-jpg',
    descripcion: 'Piso moderno y luminoso ubicado en una tranquila área residencial.',
    ubicacion: '567 Residential Street, Quiet Neigh., CA 67890',
    habitaciones: 2,
    banos: 1,
    costo: 2000,
    smoke: true,
    pets: true
  }
];

let divVenta = document.querySelector('#propiedades-venta')
let divAlquiler = document.querySelector('#propiedades-alquiler')
let templateVenta = ``
let templateAlquiler = ``
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

if (divVenta !== null && divAlquiler !== null) {
  validacionYTemplate(propiedades_venta, 3, divVenta, templateVenta)
  validacionYTemplate(propiedades_alquiler, 3, divAlquiler, templateAlquiler)
} else if (divAlquiler === null) {
  if (divVenta !== null) {
    validacionYTemplate(propiedades_venta, propiedades_venta.length, divVenta, templateVenta)
  }

} else if (divVenta === null) {
  validacionYTemplate(propiedades_alquiler, propiedades_alquiler.length, divAlquiler, templateAlquiler)
}