const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
  };
  
  let favoriteActivities: string[];
  favoriteActivities = ['Sports'];
  
  //mix data will throw error if we define string array (this is strict type)
  //let favoriteActivities1: string[];
  //favoriteActivities = ['Sports',1]; // !!! ERROR !!!
  
  //Flexible type
  let favoriteActivities3: any[];
  favoriteActivities3 = ['Sports',1];
  
  console.log(person.name);

  //for adding element in array
  person.hobbies.push('cricket')
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }