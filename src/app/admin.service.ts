import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  clients = [
    {
      "id": 1,
      "name": "Elisabet",
      "last_name": "Castaño Salazar",
      "address": "Cra 1J #48E - 42",
      "identification": "1053871025",
      "phone_number": "3217691851"
    },
    {
      "id": 2,
      "name": "Juan David",
      "last_name": "Calle",
      "address": "Cra 1J #48E",
      "identification": "105387102",
      "phone_number": "321769185"
    },
    {
      "id": 3,
      "name": "Luis Felipe",
      "last_name": "Villalba",
      "address": "Cra #48E - 42",
      "identification": "105387025",
      "phone_number": "321691851"
    },
    {
      "id": 4,
      "name": "Samuel",
      "last_name": "Castaño",
      "address": "Cra #48E - 42",
      "identification": "1053871025",
      "phone_number": "3217691851"
    }
  ];

  inmobiliarias = [
    {
      "id": 1,
      "ganancia": "Venta",
      "inmueble": "Casa",
      "superficie": 40,
      "direccion": "Cra 25",
      "habitaciones": 3,
      "banos": 1,
      "cocinas": 1,
      "gas": "Si",
      "parqueadero": "Si",
      "precio": 123456798,
      "referencia": 123
    },
    {
      "id": 2,
      "ganancia": "Arriendo",
      "inmueble": "Apartamento",
      "superficie": 40,
      "direccion": "Cra 21",
      "habitaciones": 4,
      "banos": 2,
      "cocinas": 1,
      "gas": "Si",
      "parqueadero": "Si",
      "precio": 123456198,
      "referencia": 1232
    }
  ];

  offices = [
    {
      "id": 1,
      "phone_number": "3217691851"
    },
    {
      "id": 2,
      "phone_number": "321769185"
    },
    {
      "id": 3,
      "phone_number": "321691851"
    },
    {
      "id": 4,
      "phone_number": "3217691851"
    },
    {
      "id": 5,
      "phone_number": "321691211"
    },
    {
      "id": 6,
      "phone_number": "321991541"
    },
    {
      "id": 7,
      "phone_number": "321876851"
    }
  ];

  owners = [
    {
      "id": 1,
      "name": "Elisabet",
      "last_name": "Castaño Salazar",
      "address": "Cra 1J #48E - 42",
      "identification": "1053871025",
      "phone_number": "3217691851"
    },
    {
      "id": 2,
      "name": "Juan David",
      "last_name": "Calle",
      "address": "Cra 1J #48E",
      "identification": "105387102",
      "phone_number": "321769185"
    },
    {
      "id": 3,
      "name": "Luis Felipe",
      "last_name": "Villalba",
      "address": "Cra #48E - 42",
      "identification": "105387025",
      "phone_number": "321691851"
    },
    {
      "id": 4,
      "name": "Samuel",
      "last_name": "Castaño",
      "address": "Cra #48E - 42",
      "identification": "1053871025",
      "phone_number": "3217691851"
    }
  ];

  visits = [
    {
      "id": 1,
      "date": "30/02/2023 17:59",
      "comment": "Me gusta"
    },
    {
      "id": 2,
      "date": "30/02/2023 17:19",
      "comment": "Linda"
    },
    {
      "id": 3,
      "date": "03/02/2023 16:09",
      "comment": "Buen piso"
    },
    {
      "id": 4,
      "date": "03/02/2023 17:16",
      "comment": "Buen espacio"
    },
    {
      "id": 5,
      "date": "03/02/2023 16:19",
      "comment": "Buen precio"
    },
    {
      "id": 6,
      "date": "03/02/2023 19:09",
      "comment": "Buena cocina"
    },
    {
      "id": 7,
      "date": "03/02/2023 18:07",
      "comment": "Bonita"
    }
  ];

  constructor() { }
}
