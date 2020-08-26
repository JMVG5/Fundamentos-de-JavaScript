"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//En javascript nosotros podemos enviar mas que simples datos como parametros, javascript nos permite enviar funciones tambien para poder ejecutar acciones con ellas
//Veremos un ejemplo mas abajo
var persona =
/*#__PURE__*/
function () {
  function persona(nombre, apellido, altura) {
    _classCallCheck(this, persona);

    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  } //Comenzaremos con nuestra funcion saludar a la cual le pediremos que reciba un parametro dentro de la misma, en este caso llamado PARAM, el nombre es indiferente y puede ser cualquiera
  //Este dato sera el estamos colocando dentro de la funcion saludar al momento de ser ejecutada y se evaluara para poder crear un a accion


  _createClass(persona, [{
    key: "saludar",
    value: function saludar(PARAM) {
      var nombre = this.nombre,
          apellido = this.apellido;
      console.log("Hola, me llamo ".concat(this.nombre, " ").concat(this.apellido)); //El ejercicio consiste en saber si la persona es desarrolladora o no y con esto agregar algo mas al saludo por lo que aqui evaluaremos
      //si la funcion saluda recibe otro parametro dara true en nuestro if y su bloque de codigo se ejecutara modificando nuestra funcion PARAM
      //lo que enviara el nombre, apellido y un false el cual hace referencia a que esa persona no es desarrollador

      if (PARAM) {
        PARAM(nombre, apellido, false);
      }
    }
  }, {
    key: "soyAlto",
    value: function soyAlto() {
      return this.altura > 1.80;
    }
  }]);

  return persona;
}();

var desarrollador =
/*#__PURE__*/
function (_persona) {
  _inherits(desarrollador, _persona);

  function desarrollador(nombre, apellido, altura) {
    _classCallCheck(this, desarrollador);

    return _possibleConstructorReturn(this, _getPrototypeOf(desarrollador).call(this, nombre, apellido, altura));
  } //En el caso de nuestra funcion desarrollador queremos que la modificacion de datos sea igual que nuestro saludo a diferencia de que el tercer parametro debera de ser un true ya que al ejecutar esta funcion
  //damos por entendido que la persona si es desarrollador, por lo que el codigo queda de la siguiente manera 


  _createClass(desarrollador, [{
    key: "saludar",
    value: function saludar(PARAM) {
      // aqui aplicaremos la desestrucuturacion para hacer mas legible el codigo 
      var nombre = this.nombre,
          apellido = this.apellido; //la sentencia anterior es lo mismo a colocar lo siguiente
      //  var nombre = this.nombre
      // var apellido = this.apellido

      console.log("Hola, me llamo ".concat(nombre, " ").concat(apellido, " y soy desarrollador"));

      if (PARAM) {
        //     asi podremos eliminar los this en nuestro codigo
        PARAM(nombre, apellido, true);
      }
    }
  }]);

  return desarrollador;
}(persona); //Aqui creamos nuestra funcion que nos indicara si la persona es desarrollador o no agregando ese tercer parametro el cual hace referencia al true o false que las funciones saludar y desarrollador estan evaluando
//esDes, hace referencia a ese tercer parametro el cual es una funcion previamente evaluda


function responderSaludo(nombre, apellido, esDes) {
  console.log("Buen dia ".concat(nombre, " ").concat(apellido));

  if (esDes) {
    console.log("Wow, no sabia que eras desarrollador");
  }
} //al momento de crear a nuestras personas si nosotros creamos a un desarrollador, la funcion evaluada para esDev, sera true y ejecutara el codigo dentro de PARAM para desarrollador, de lo contrario sera false
//esto nos ayuda a personalizar el saludo para cada persona 


var manuel = new persona('manuel', 'venegas', 1.82);
var arik = new persona('arik', 'briselo', 1.90);
var lalo = new desarrollador('Eduardo', 'palomar', 1.56); //Como repsuestas, manuel no ejecutara el codigo de ninguno ya que no recibe ningun parametro y solo se presentara

manuel.saludar(); //arik ejecutara el codigo de presentarce y se le respondera el saludo ya que recibe como parametro nuestra funcion responder saludo, sin embargo no entrara en ejecucion esDev ya que el parametro que recibe es false
//por que creamos a una persona y no a un desarrollador

arik.saludar(responderSaludo); //En el caso de lalo se ejecutara lo mismo que arik, sin embargo como arik lo creamos con la clase desarrollador, la condicion sera verdadera y entrara en accion nuestro if dentro de responder saludo el cual agrega otra respuesta al codigo 

lalo.saludar(responderSaludo);