class Persona {
      // Crea el constructor de la clase "Persona".
      // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
      // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
      // sus valores.
      constructor(nombre,apellido,edad,domicilio){
         this.nombre = nombre;
         this.apellido = apellido;
         this.edad = edad;
         this.domicilio = domicilio;
         
      }
      detalle(){
         return  {
            nombre:this.nombre,
           apellido: this.apellido,
            edad: this.edad,
           domicilio: this.domicilio
        }
      }
   }
   function agregarMetodo() {
      // La función agrega un método "datos" a la clase "Persona".
      // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
      // Ejemplo: "Juan, 22 años".
      // Tu código:
      Persona.prototype.datos=function(){
       return  `${persona.nombre}, ${persona.edad} años`;
      }
     // Persona.datos();
     
   
     }
   
   let persona = new Persona("Joaqui","Del Pino",13,"Ballest");
   console.log(persona.detalle())
   agregarMetodo();
  // const persona = new Persona('Juan', 'Pérez', 22, 'Saavedra 123');
   //Persona.prototype.datos=()=>`${this.nombre}, ${this.edad} años`;
   console.log(persona.datos())