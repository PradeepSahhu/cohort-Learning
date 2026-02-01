import { prisma } from "./lib/prisma";

async function main() {
  const user = await prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      email: "ritik.sahu@gmail.com",
    },
  });
}

main();
