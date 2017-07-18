import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  public dummy = {
  "cuentas": [
    {
      "id": 20,
      "date_time": "2017-07-15T02:55:35.000Z",
      "cuenta": "1410501 VehÃ­culos Terrestres",
      "cuentas": null,
      "clases": [
        {
          "id": 6,
          "date_time": "2017-07-15T03:11:57.000Z",
          "clase": "VehÃ­culos",
          "cuenta": 20,
          "subClases": [
            {
              "id": 16,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Vehiculos terrestres",
              "clase": 6,
              "denominaciones": [
                {
                  "id": 87,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "AutomÃ³vil",
                  "sub_clase": 16
                },
                {
                  "id": 88,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Camioneta",
                  "sub_clase": 16
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 19,
      "date_time": "2017-07-15T02:55:35.000Z",
      "cuenta": "14107 Herramientas",
      "cuentas": null,
      "clases": [
        {
          "id": 5,
          "date_time": "2017-07-15T03:11:40.000Z",
          "clase": "Herramientas",
          "cuenta": 19,
          "subClases": [
            {
              "id": 15,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Herramientas elÃ©ctricas",
              "clase": 5,
              "denominaciones": [
                {
                  "id": 78,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Soplete",
                  "sub_clase": 15
                },
                {
                  "id": 79,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Esmeril",
                  "sub_clase": 15
                },
                {
                  "id": 80,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Taladro",
                  "sub_clase": 15
                },
                {
                  "id": 81,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Lijadora",
                  "sub_clase": 15
                },
                {
                  "id": 82,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Destornillador",
                  "sub_clase": 15
                },
                {
                  "id": 83,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Rotomartillo",
                  "sub_clase": 15
                },
                {
                  "id": 84,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Fresadora",
                  "sub_clase": 15
                },
                {
                  "id": 85,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Demoledor",
                  "sub_clase": 15
                },
                {
                  "id": 86,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Taladro",
                  "sub_clase": 15
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 18,
      "date_time": "2017-07-15T02:55:35.000Z",
      "cuenta": "14112 Otras MÃ¡quinas y Equipos",
      "cuentas": null,
      "clases": [
        {
          "id": 4,
          "date_time": "2017-07-15T03:10:57.000Z",
          "clase": "Maquinarias",
          "cuenta": 18,
          "subClases": [
            {
              "id": 13,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "MÃ¡quinas",
              "clase": 4,
              "denominaciones": [
                {
                  "id": 68,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Fresadora",
                  "sub_clase": 13
                },
                {
                  "id": 69,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Torno",
                  "sub_clase": 13
                },
                {
                  "id": 70,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Motosierra",
                  "sub_clase": 13
                },
                {
                  "id": 71,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Cepilladora",
                  "sub_clase": 13
                },
                {
                  "id": 72,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Orilladora",
                  "sub_clase": 13
                },
                {
                  "id": 73,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Cortadora de pasto",
                  "sub_clase": 13
                },
                {
                  "id": 74,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Termolaminadora",
                  "sub_clase": 13
                },
                {
                  "id": 75,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Anilladora",
                  "sub_clase": 13
                },
                {
                  "id": 76,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Sierra elÃ©ctrica",
                  "sub_clase": 13
                }
              ]
            },
            {
              "id": 14,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Otras mÃ¡quinas",
              "clase": 4,
              "denominaciones": [
                {
                  "id": 77,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Balanza",
                  "sub_clase": 14
                }
              ]
            }
          ]
        },
        {
          "id": 7,
          "date_time": "2017-07-15T03:15:33.000Z",
          "clase": "Equipos MyE",
          "cuenta": 18,
          "subClases": [
            {
              "id": 11,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Equipos de cocina",
              "clase": 7,
              "denominaciones": [
                {
                  "id": 58,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Cocina",
                  "sub_clase": 11
                },
                {
                  "id": 59,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Campana",
                  "sub_clase": 11
                },
                {
                  "id": 60,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Termo elÃ©ctrico",
                  "sub_clase": 11
                },
                {
                  "id": 61,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Microondas",
                  "sub_clase": 11
                },
                {
                  "id": 62,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Refrigerador",
                  "sub_clase": 11
                }
              ]
            },
            {
              "id": 12,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Otros equipos",
              "clase": 7,
              "denominaciones": [
                {
                  "id": 63,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Aspiradora",
                  "sub_clase": 12
                },
                {
                  "id": 64,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Microscopio",
                  "sub_clase": 12
                },
                {
                  "id": 65,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Camaras de seguridad",
                  "sub_clase": 12
                },
                {
                  "id": 66,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "EsfingnomanÃ³metro",
                  "sub_clase": 12
                },
                {
                  "id": 67,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Negatoscopio",
                  "sub_clase": 12
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 17,
      "date_time": "2017-07-15T02:55:35.000Z",
      "cuenta": "14108 Equipos Computacionales y PerifÃ©ricos",
      "cuentas": null,
      "clases": [
        {
          "id": 3,
          "date_time": "2017-07-15T03:10:42.000Z",
          "clase": "Equipos CyP",
          "cuenta": 17,
          "subClases": [
            {
              "id": 10,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Equipos computacionales",
              "clase": 3,
              "denominaciones": [
                {
                  "id": 54,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Notebook",
                  "sub_clase": 10
                },
                {
                  "id": 55,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "CPU",
                  "sub_clase": 10
                },
                {
                  "id": 56,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Monitor",
                  "sub_clase": 10
                },
                {
                  "id": 57,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Teclado",
                  "sub_clase": 10
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 16,
      "date_time": "2017-07-15T02:55:35.000Z",
      "cuenta": "14104 MÃ¡quinas y Equipos de Oficina",
      "cuentas": null,
      "clases": [
        {
          "id": 2,
          "date_time": "2017-07-15T03:10:25.000Z",
          "clase": "MÃ¡quinas y Equipos",
          "cuenta": 16,
          "subClases": [
            {
              "id": 9,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "MÃ¡quinas y equipos de oficina",
              "clase": 2,
              "denominaciones": [
                {
                  "id": 33,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Maquina de FAX",
                  "sub_clase": 9
                },
                {
                  "id": 34,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Proyector",
                  "sub_clase": 9
                },
                {
                  "id": 35,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Impresora",
                  "sub_clase": 9
                },
                {
                  "id": 36,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Scaner",
                  "sub_clase": 9
                },
                {
                  "id": 37,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Impresora multifuncional",
                  "sub_clase": 9
                },
                {
                  "id": 38,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Trituradora de papel",
                  "sub_clase": 9
                },
                {
                  "id": 39,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "MÃ¡quina de escribir",
                  "sub_clase": 9
                },
                {
                  "id": 40,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Calefactor",
                  "sub_clase": 9
                },
                {
                  "id": 41,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Climatizador",
                  "sub_clase": 9
                },
                {
                  "id": 42,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Estufa",
                  "sub_clase": 9
                },
                {
                  "id": 43,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "TelÃ³n",
                  "sub_clase": 9
                },
                {
                  "id": 44,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Proyector",
                  "sub_clase": 9
                },
                {
                  "id": 45,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Ventilador",
                  "sub_clase": 9
                },
                {
                  "id": 46,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Aire acondicionado",
                  "sub_clase": 9
                },
                {
                  "id": 47,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "CÃ¡mara fotogrÃ¡fica",
                  "sub_clase": 9
                },
                {
                  "id": 48,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Equipo musical",
                  "sub_clase": 9
                },
                {
                  "id": 49,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Radio comunicaciÃ³n",
                  "sub_clase": 9
                },
                {
                  "id": 50,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Televisor",
                  "sub_clase": 9
                },
                {
                  "id": 51,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "DVD",
                  "sub_clase": 9
                },
                {
                  "id": 52,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "TelÃ©fono",
                  "sub_clase": 9
                },
                {
                  "id": 53,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "CÃ¡mara grabadora",
                  "sub_clase": 9
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 15,
      "date_time": "2017-07-15T02:55:35.000Z",
      "cuenta": "14106 Muebles y enseres",
      "cuentas": null,
      "clases": [
        {
          "id": 1,
          "date_time": "2017-07-15T03:07:43.000Z",
          "clase": "Mobiliario",
          "cuenta": 15,
          "subClases": [
            {
              "id": 1,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Sillas",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 1,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Silla visita",
                  "sub_clase": 1
                },
                {
                  "id": 2,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Silla funcionario",
                  "sub_clase": 1
                },
                {
                  "id": 3,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Silla jefatura",
                  "sub_clase": 1
                },
                {
                  "id": 4,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Silla de espera",
                  "sub_clase": 1
                },
                {
                  "id": 5,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Silla comedor",
                  "sub_clase": 1
                },
                {
                  "id": 6,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Silla de ruedas",
                  "sub_clase": 1
                }
              ]
            },
            {
              "id": 2,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Sillones",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 7,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "SillÃ³n",
                  "sub_clase": 2
                },
                {
                  "id": 8,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "FutÃ³n",
                  "sub_clase": 2
                }
              ]
            },
            {
              "id": 3,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Mesas",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 9,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Mesa de reuniÃ³n",
                  "sub_clase": 3
                },
                {
                  "id": 10,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Mesa de centro",
                  "sub_clase": 3
                },
                {
                  "id": 11,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Mesa de recepciÃ³n",
                  "sub_clase": 3
                },
                {
                  "id": 12,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Mesa de comedor",
                  "sub_clase": 3
                },
                {
                  "id": 13,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "MesÃ³n",
                  "sub_clase": 3
                }
              ]
            },
            {
              "id": 4,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Escritorio",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 14,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "EstaciÃ³n de trabajo",
                  "sub_clase": 4
                },
                {
                  "id": 15,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Escritorio",
                  "sub_clase": 4
                }
              ]
            },
            {
              "id": 5,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Gabinete",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 16,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Gabinete",
                  "sub_clase": 5
                },
                {
                  "id": 17,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Gabinete colgante",
                  "sub_clase": 5
                }
              ]
            },
            {
              "id": 6,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Closet",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 18,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Closet",
                  "sub_clase": 6
                }
              ]
            },
            {
              "id": 7,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Repisas",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 19,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Estante",
                  "sub_clase": 7
                }
              ]
            },
            {
              "id": 8,
              "date_time": "2017-07-15T03:31:40.000Z",
              "sub_clase": "Otro mobiliario",
              "clase": 1,
              "denominaciones": [
                {
                  "id": 20,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Cajonera",
                  "sub_clase": 8
                },
                {
                  "id": 21,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Pizarra acrÃ­lica",
                  "sub_clase": 8
                },
                {
                  "id": 22,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Pizarra corcho",
                  "sub_clase": 8
                },
                {
                  "id": 23,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Vitrina",
                  "sub_clase": 8
                },
                {
                  "id": 24,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Pizarra interactiva",
                  "sub_clase": 8
                },
                {
                  "id": 25,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Locker",
                  "sub_clase": 8
                },
                {
                  "id": 26,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Repisa",
                  "sub_clase": 8
                },
                {
                  "id": 27,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Biblioteca",
                  "sub_clase": 8
                },
                {
                  "id": 28,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Kardex",
                  "sub_clase": 8
                },
                {
                  "id": 29,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "BotiquÃ­n",
                  "sub_clase": 8
                },
                {
                  "id": 30,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Escalera",
                  "sub_clase": 8
                },
                {
                  "id": 31,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Caja fuerte",
                  "sub_clase": 8
                },
                {
                  "id": 32,
                  "date_time": "2017-07-15T03:45:00.000Z",
                  "denominacion": "Perchero",
                  "sub_clase": 8
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "dependencias": [
    {
      "id": 1,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Oficina de Programas Externos HerÃ¡ldica NÂ° 8921 "
    },
    {
      "id": 2,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Anexo Municipalidad Pudahuel Sur , Puerto Arturo Frente NÂ°8260"
    },
    {
      "id": 3,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Centro Cultural Pudahuel Sur La Estrella"
    },
    {
      "id": 4,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Siglo XXI, Avda. Teniente Cruz  NÂ° 750"
    },
    {
      "id": 5,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Estadio Modelo, Avda. Corona Sueca NÂ°8325"
    },
    {
      "id": 6,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Oficina de Informaciones Sector Rural SimÃ³n BolÃ­var S/N Ciudad Brasilia"
    },
    {
      "id": 7,
      "date_time": "2017-07-15T03:50:20.000Z",
      "dependencia": "Complejo Deportivo General Bonilla"
    }
  ],
  "estados": [
    {
      "id": 1,
      "date_time": "2017-07-11T18:29:29.000Z",
      "estado": "Bueno"
    },
    {
      "id": 2,
      "date_time": "2017-07-11T18:29:40.000Z",
      "estado": "Malo"
    },
    {
      "id": 3,
      "date_time": "2017-07-11T18:29:52.000Z",
      "estado": "Regular"
    }
  ],
  "representantes": [
    {
      "id": 1,
      "date_time": "2017-07-15T06:25:25.000Z",
      "nombre": "Carlos Bustamante",
      "rut": "12345678-9"
    },
    {
      "id": 2,
      "date_time": "2017-07-18T00:16:32.000Z",
      "nombre": "Marcelo Fernandez",
      "rut": "9999999-9"
    }
  ],
  "usuarios": [
    {
      "id": 1,
      "date_time": "2017-07-15T08:12:03.000Z",
      "username": "Carlos Bustamante",
      "rut": "11111111"
    }
  ]
};
  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('actives');  
  }

  getInputs() {
    return this.dummy;
    // return this.storage.get('inputs');  
  }

  getUser() {
    return this.storage.get('user');  
  }

   saveUser(data) {
    let newData = JSON.stringify(data);
    this.storage.set('user', newData);
  }

 
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('actives', newData);
  }

  
}
