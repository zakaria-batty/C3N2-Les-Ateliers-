// ARRAY 1
document.write('<h1>ARRAY1</h1>');

  const texasss = [
    { name: 'Mike', age: 23, gender: 'm', us: false,},
    { name: 'Liz', age: 20, gender: 'f', us: true, },
    { name: 'Chris', age: 102, gender: 'm', us: true, },
    { name: 'Chuloo', age: 27, gender: 'm', us: false, },
    { name: 'Annie', age: 30, gender: 'f', us: true, },
  ];
   // Part 1 - Find all users older than 24
  document.write("<ul>");//Parcourir un tableau
  for (const element of texasss) {
    if(element.age>24)//TEST + AFFICHAGE
      document.write("<li>"+element.name+"</li>");
  }
  document.write("</ul>");


  // Part 2 - Find the total age of all users
  document.write("<ul>");
  var somme=0;

for (const element of texasss) {
  //Calcul Somme Age
  somme = somme+ element.age;
}
document.write("</ul>");

//Afficher la somme ::
document.write("the total age of all users : "+somme);


  // Part 3 - List all female coders
  document.write("<ol>"); //Afficher les femmes
  for (const person of texasss) {
    if(person.gender==='f')
      document.write("<li>"+person.name + "</li>");
  }
  document.write("</ol>");
  
  

  document.write('<h1>ARRAY2</h1>');
  // ARRAY 2
  const newieyork = [
    { name: 'Michelle', age: 19,coder:true, gender: 'f', us: true,},
    { name: 'Sam', age: 25, coder:false, gender: 'm', us: false, },
    { name: 'Ivy', age: 26, coder:true, gender: 'f', us: false, },
    { name: 'Nick', age: 32, coder:true,  gender: 'm', us: true, },
    { name: 'Jim Beglin', age: 65, coder:false, gender: 'm', us: true,},
  ];
  
  // Part 1 - List all users in US in ascending order
  document.write("<ul>");
  for (const users  of newieyork )
   {
    if(users.us===true)
    document.write("<li>"+users.name+"</li>");//Afficher les nom ::
   }
  document.write("</ul>");

  // Part 2 - Sort all users by age
  var noulistt = newieyork.sort((a, b) => (a.age > b.age) ? 1 : -1)
  document.write("<ol>");
  for (const person of noulistt) {
    document.write("<li>"+person.name+ " : "+person.age + "</li>");
  }
  document.write("</ol>");
 
  // Part 3 -  List all female coders
  document.write("<ol>"); //Afficher les femmes
  for (const person of newieyork) {
    if(person.gender==='f' && person.coder===true)
       
      document.write("<li>"+person.name + "</li>");
  }
  document.write("</ol>")
  

  document.write('<h1>ARRAY3</h1>');
  // ARRAY 3
  const vegzas = [
    { name: 'Charly', age: 32, coder:true, gender: 'm', },
    { name: 'Law', age: 21, coder:true, gender: 'm', },
    { name: 'Rosey', age: 42, coder:false, gender: 'f',},
    { name: 'Steph', age: 18, coder:true, gender:'f', },
    { name: 'Jon', age: 47, coder:false, gender: 'm', },
  ];

   // Part 1 - Find the total age of male coders under 25

   document.write ('<h3> part 1</h3>');
                   //  the total age of male coders under 25
   let age_counter = 0 ;
  
   vegzas .forEach ( (person) =>{
     if (person.age>25 && person.coder)
          {
            age_counter += person.age;
          }
   });

   document.write('the total age of male coders under 25 is :' + age_counter);
  // Part 2 - List all male coders over 30
  document.write ('<h3> part 2</h3>');

  //////////////////////méthode-1///////////////////// 
  let males_30_age_list = vegzas.filter( (person) => {
     {
       return person.age>30 && person.gender == 'm' && person.gender===true;
     }
  });
  console.table(males_30_age_list);
  //////////////////////méthode-2///////////////////// 
  console.table(vegzas.filter((person) => person.age > 30 && person.gender == 'm' && person.coder));
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  document.write ('<h3> part 3</h3>');
//////////////////////méthode-1/////////////////////
  const total_ages_1 = [
    vegzas.map((person) => person.age)
          .reduce((initial_age, next_age) => initial_age + next_age),
    newieyork.map((person) => person.age)
             .reduce((initial_age, next_age) => initial_age + next_age),
    texasss.map((person) => person.age)
              .reduce((initial_age, next_age) => initial_age + next_age)
  ].reduce((initial_age, next_age) => initial_age + next_age);
  
  // total ages of all persons { using only reduce }
  //////////////////////méthode-2///////////////////// 
  const total_ages_2 = [
    vegzas.reduce(
      (initial_value, next_person) =>
        initial_value.age ? initial_value.age + next_person.age : initial_value + next_person.age
    ),
    newieyork.reduce(
      (initial_value, next_person) =>
        initial_value.age ? initial_value.age + next_person.age : initial_value + next_person.age
    ),
    texasss.reduce(
      (initial_value, next_person) =>
        initial_value.age ? initial_value.age + next_person.age : initial_value + next_person.age
    )
  ].reduce((initial_age, next_age) => initial_age + next_age);
  
  document.write('total ages of everyone is : ' + total_ages_1 + '<br/>');
  document.write('total ages of everyone is : ' + total_ages_2);