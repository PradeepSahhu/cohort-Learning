import { prisma } from "./lib/prisma";

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "This is the pradeep's post",
      content: "this is the post of the pradeep",
      authorId: 2,
    },
  });
}

async function Another() {
  const post = await prisma.post.create({
    data: {
      title: "This is the Sandeep's post",
      content: "this is the post of the Sandeep",
      author: {
        connect: {
          id: 3,
        },
      },
    },
  });
}

Another().then(async () => {
  console.log("the post is created");
});
