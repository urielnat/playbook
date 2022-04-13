const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   // 1.- Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

   explorers.forEach((exp)=>
       console.log(exp.name)
   );


   // 2.-Imprime el stack de cada explorer, usa FOR EACH

   explorers.forEach((exp)=>
     console.log(exp.stack)
    );

   // 3.- Crea una nueva lista con las listas de stacks de cada explorer, usa MAP    
    const nuevaLista = explorers.map(exp=>exp.stack)
    console.log('ejercicio 3')
    console.log(nuevaLista)

    //4.-Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
    const nuevaLista2 = explorers.filter(exp=>exp.stack.includes('js'))
    console.log('ejercicio 4')
    console.log(nuevaLista2)

    //5.- Busca el primer explorer que sea de la CDMX, usa FIND
    const nuevaLista3 = explorers.find(exp=>exp.city.includes('CDMX'))
    console.log('ejercicio 5')
    console.log(nuevaLista3)

    //6.- Obtén la suma de todos los exercises_completed, usa REDUCE
    const suma = explorers.reduce((el,exp)=>el +exp.exercises_completed,0)
    console.log('ejercicio 6')
    console.log(suma)


    //7.- Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
    const validacion = explorers.some(exp=>exp.missions.frontend.exercisesFinished==true)
    console.log('ejercicio 7')
    console.log(validacion)

    //8.- Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
    const validacion2 = explorers.every(exp=>exp.missions.onboarding.isFinished==true)
    console.log('ejercicio 7')
    console.log(validacion2)