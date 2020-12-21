console.clear();
// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const newFruits = fruits.join("-");
  console.log(newFruits);
}
// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const newFruits = Array.from(fruits.replaceAll(", ", ""));
  console.log(newFruits);
  // const result = fruits.split(", "); //홀리 몰리!!!!!!!!
  // //split 는 limit rkqtdmf qkedmf t ndlTtmqslekd!
  // console.log(result);
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // array.splice(0, 2); //기존 배열에 영향을 줍니다.
  const result = array.slice(2, 5);
  console.log(array);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // students.forEach((student) => {
  //   if (student.score === 90) return console.log(student);
  // });

  //오호.. 해당하는 첫번째껄 찾아오는 find~ true 가 반환되면 끝남
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // students.forEach((student) => {
  //   if (student.enrolled) return console.log(student);
  // });
  const result = students.filter((student) => {
    return student.enrolled;
  });
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoresArray = students.map((student) => student.score);
  console.log(scoresArray);
}

// Q8. check if there is a student with the score lower than 50
// 하나라도 만족! : some / 모두 만족해야함! ; every
{
  const result = students.some((student) => {
    // 해당하는 애가 한명이라도 있는지 ????
    return student.score < 50;
  });
  const result2 = !students.every((student) => {
    // 해당하는 애가 한명이라도 있는지 ????
    return student.score >= 50;
  });
  console.log(result);
  console.log(result2);
}

// Q9. compute students' average score
{
  // const scoresArray =
  //   students
  //     .map((student) => student.score)
  //     .reduce((prev, curr, idx) => prev + curr) / students.length;
  const scoresArray =
    students.reduce((prev, curr) => prev + curr.score, 0) / students.length;

  // 0 = initial ! 기본값 세팅, 이게 없으면 A가 기본값으로 낭로거에요
  console.log(scoresArray);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scoresArray = students.map((student) => student.score).join();
  console.log(scoresArray);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scoresArray = students
    .map((student) => student.score)
    .sort((a, b) => a - b);
  console.log(scoresArray);
}
