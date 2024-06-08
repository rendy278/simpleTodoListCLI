import inquirer from "inquirer";

let todo: string[] = [];
let loop = true;

while (loop) {
  const answer: { TODO: string; addmore: boolean } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "masukan list tugasmu di program ini:",
    },
    {
      type: "confirm",
      name: "retry",
      message:
        "apakah kamu ingin menambahkan lebih banyak liast tugas pada program cli ini ?:",
      default: false,
    },
  ]);
  const { TODO, addmore } = answer;
  console.log(answer);
  loop = addmore;
  if (TODO) {
    todo.push(TODO);
  } else {
    console.log("mohon tambahkan masukan yang valid");
  }
}
if (todo.length > 0) {
  console.log("List Tugas Mu:");
  todo.forEach((todos) => {
    console.log(todos);
  });
} else {
  console.log("Tidak dapat menemukan list tugas anda :(");
}
