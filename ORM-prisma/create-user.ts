import { prisma } from "./lib/prisma";

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: "ritik",
      email: "ritik.kumar.sahu@gmail.com",
      posts: {
        create: {
          content: "This is a post ",
          title: "This is the new post",
        },
      },
    },
  });

  console.log("new user", newUser);

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    console.log("user created successfully");
  })
  .catch(async () => {
    console.log("can't create the user");
  });
