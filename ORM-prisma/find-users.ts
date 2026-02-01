import { prisma } from "./lib/prisma";

async function main() {
  const users = await prisma.user.findMany({});

  console.log(JSON.stringify(users, null, 2));

  const unique = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      posts: true,
    },
  });

  console.log("user with the post", JSON.stringify(unique, null, 2));
}

main().then(async () => {
  console.log("users found");
});
