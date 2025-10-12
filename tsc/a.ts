function PassFunciton(fn: () => void) {
  setTimeout(fn, 1000);
}

PassFunciton(() => {
  console.log("this is being called");
});

function PassFunc(fn: (x: number) => number) {
  setTimeout(fn, 1000);
}

PassFunc((age: number) => {
  console.log("this is being called");
  return 2;
});

// infered automatically.

interface User {
  firstName: string;
  lastName: string;
  id: string | number;
}

function getUserId(id: number | string) {
  console.log(`The user id is : ${id}`);
}

getUserId("123");
getUserId(123);

interface Users {
  name: string[];
}

function test(names: Users) {
  console.log(names.name[0]);
}

type Names = string[];
test({ name: ["Pradeep sahu", "no name"] });

function test2(name: Names) {
  console.log(name[0]);
}

test2(["Pradeep", "sandeep"]);
