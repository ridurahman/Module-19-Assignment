import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.product_review.create({
    //   data: {
    //     title: "bgdjfghd",
    //     rating: "*****",
    //     content: "fgfhjkjte",
    //     productId: 1,
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.product_review.createMany({
      data: [
        {
          title: "gfdgytrt",
          rating: "****",
          content: "jtyghfdy",
          productId: 2,
        },
        {
          title: "dfgtyuyryt",
          rating: "*****",
          content: "ghjtyurgbgjh",
          productId: 4,
        },
        {
          title: "sdsawerrtr",
          rating: "***",
          content: "yrtghffhjhjh",
          productId: 1,
        },
      ],
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================READ===================

    //=================findMany==============
    const result = await prisma.product_review.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.product_review.findMany({
    //   where: { title: "sdsawerrtr" },
    //   select: { id: true },
    // });

    //============findFirst()=================
    //const result = await prisma.product_review.findFirst();

    //============find orderBy=================
    //const result = await prisma.product_review.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.product_review.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.product_review.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.product_review.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.product_review.findMany({
    //   orderBy: {
    //     id: "desc",
    //   },
    //   take: 5,
    // });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function PUT(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Update===================
    const result = await prisma.product_review.update({
      where: { id: 2 },
      data: {
        title: "positive review",
        rating: "*****",
        content: "good",
        productId: 2,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function DELETE(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================DELETE===================
    const result = await prisma.product_review.delete({
      where: { id: 1 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
