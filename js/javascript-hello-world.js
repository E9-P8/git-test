function sayHello() {
        alert("Hello World!");
      }

      // ----------Esercizio 2 --------------
      console.log("hello console!");

      let greeting = "Good to see you, Console!";
      console.log(greeting);

      console.log(100 / 4.23);

      // ----------Esercizio 3 --------------

      let myNumber = 50;
      console.log(typeof myNumber);

      let myText = "JavaScript is fun";
      console.log(typeof myText);

      let isLearning = true;
      console.log(typeof isLearning);

      // ----------Esercizio 4 --------------

      let firstName = "John";
      firstName;
      typeof firstName;
      //mi da undefined come dice
      // nella console non puoi dichiarare e inizializzare insieme, prima dichiari e poi dai il valore

      // ----------Esercizio 4 --------------

      /* concatenare stringe */
      let name = "Elisa";
      let cognome = "Puorto";

      console.log(name + " " + cognome);
      /* aggiungere o sottrarre due variabili numeriche */

      let anni = 20;
      let anni1 = 6;
      console.log(anni + anni1);

      //------- Chiamare una funzione ----------
      function sayWord(word) {
        alert(word);
      }

      sayWord("Ciao");

      //----------- Esercizi delle funzioni ----
      function sayHello() {
        const userName = "Batman";
        alert("Hello " + userName + "!");
      }

      function sayHello() {
        const userName = prompt("What is your name?");
        alert("Hello " + userName + "!");
      }

      function getName() {
        const userName = prompt("What is your name?");
        sayHello(userName);
      }
      function sayHello(name) {
        alert("Hello " + name + "!");
      }

      // Assegnazione e call di una funzione
      function multiplyNums(x, y) {
        return x * y;
      }

      let num1 = 6;
      let num2 = 7;

      const result = multiplyNums(num1, num2);
      displayResult(result);