const person1 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [ 2, 'author'] //tuples is basically used when we need array which fixed length and fixed type i.e one with number and string
  };
  
  let favoriteActivity: string[];
  favoriteActivity = ['Sports'];
  
  //mix data will throw error if we define string array (this is strict type)
  //let favoriteActivities: string[];
  //favoriteActivities = ['Sports',1]; // !!! ERROR !!!
  
  //Flexible type
  let favoriteActivities2: any[];
  favoriteActivities2 = ['Sports',1];
  
  console.log(person1.name);

  
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
  }