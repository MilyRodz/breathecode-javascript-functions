// Your code goes here:

const renderPerson = (name, dateofBirth, eyeColor, age, gender) => {
    var result = name + ' is a ' + age + ' years old ' + gender + ' born in ' + dateofBirth + ' with ' + eyeColor + ' eyes ';

    return result;

}

  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));