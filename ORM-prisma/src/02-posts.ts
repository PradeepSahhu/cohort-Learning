import { prisma } from "../lib/db";

async function main() {
  await prisma.post.create({
    data: {
      title: "title of post",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
