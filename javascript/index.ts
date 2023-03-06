const clubs = [
  { name: 'soccer', members: [1, 3, 4] },
  { name: 'tennis', members: [2, 5, 6] },
  { name: 'swimming', members: [7, 8, 11] },
];
const students = [...Array(10)].map((_, i) => i + 1);
// console.log('🚀 ~ file: index.ts:7 ~ students:', students);
// for (let i = 0; i < clubs.length; i++) {
//   for (let j = 0; j < clubs[i].members.length; j++) {
//     for (let k = 0; k < students.length; k++) {
//       if (clubs[i].members[k] == students[k]) {
//         console.log(students[j]);
//       }
//     }
//   }
// }
// const clubs2 = [
//   { name: 'soccer', members: [1, 3, 4] },
//   { name: 'tennis', members: [2, 5, 6] },
//   { name: 'swimming', members: [7, 8, 11] },
// ];
// const students2 = [...Array(10)].map((_, i) => i + 1);

// clubs2.forEach((club) => {
//   club.members.forEach((member) => {
//     if (students2.includes(member)) {
//       console.log(member);
//     }
//   });
// });

// const allMembers = clubs.reduce((prev: number[], curr) => {
//   return [...prev, ...curr.members];
// }, []);
// console.log('🚀 ~ file: index.ts:34 ~ allMembers ~ allMembers:', allMembers);
// const data = students.filter((student) => {
//   return allMembers.includes(student);
// });
// console.log('🚀 ~ file: index.ts:37 ~ data ~ data:', data);

type Student = {
  id: number;
  height: number;
};
interface SchoolClass {
  // write code here
  getRangeStudents(id_1: number, id_2: number): Student[];
  getRangeHeights(id_1: number, id_2: number): Student[];
}

type params = { min: number; max: number; begin: number; end: number };
class SchoolClassImpl implements SchoolClass {
  constructor(private readonly students: Student[]) {}
  // write code here

  public getRangeStudents(id_1: number, id_2: number) {
    return this.students.filter(
      (student) => student.id <= id_2 && student.id > id_1
    );
  }
  public getRangeHeights(height_1: number, height_2: number) {
    return this.students.filter(
      (student) => student.height <= height_2 && student.id <= height_1
    );
  }

  public getRangHeights2(id_1: number, id_2: number): Student[] {
    return this.students.filter(
      (students) => students.height >= id_1 && students.height < id_2
    );
  }

  public validateMinMaxParams(params: Partial<params>) {
    const { min, max, end, begin } = params;

    if (min && max) {
      return true;
    }

    if (end && begin) {
      return false;
    }
  }
  public selectBetweenHeight = (params: Partial<params>) => {
    if (this.validateMinMaxParams(params)) {
      return this.students.filter(
        (student) =>
          (params as params).min <= student.height &&
          student.height <= (params as params).max
      );
    }
    return this.students.filter(
      (student) =>
        (params as params).begin <= student.height &&
        student.height < (params as params).end
    );
  };
}
const classA = new SchoolClassImpl([
  { id: 1, height: 150 },
  { id: 3, height: 160 },
  { id: 5, height: 155 },
  { id: 6, height: 156 },
]);
console.log(classA.getRangeStudents(1, 5));
console.log(classA.getRangeHeights(150, 156));
console.log(classA.getRangHeights2(150, 156));

classA.selectBetweenHeight({
  min: 1,
  max: 5,
});
