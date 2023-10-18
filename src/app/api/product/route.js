import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function product(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    // ================Insert One=============
    // const result = await prisma.product.create({
    //   data: {
    //     firstName: "Mobile",
    //     metaTitle: "dfsdfds",
    //     slug: "fjdnbv",
    //     summary: "jdfkg",
    //     price: 20000,
    //     discount: 200,
    //     userId:4,
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.product.createMany({
      data: [
        {
          firstName: "Laptop",
          metaTitle: "hdfhrtst",
          slug: "fdgfsghr",
          summary: "fdghete",
          price: 50000,
          discount: 500,
          userId: 2,
        },
        {
          firstName: "Monitor",
          metaTitle: "dgeerte",
          slug: "gfhrtyj",
          summary: "Atytuytu",
          price: 25000,
          discount: 250,
          userId: 1,
        },
        {
          firstName: "Mouse",
          metaTitle: "jrtersdfgh",
          slug: "kjghfd",
          summary: "jyrtdfgh",
          price: 3000,
          discount: 300,
          userId: 4,
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

    //=======operation - aggregate, _avg, _count, groupBy, _max, _sum==========
    const result = await prisma.product.aggregate({
      _avg: { price: true },
      _count: { price: true },
      _max: { price: true },
      _min: { price: true },
      _sum: { price: true },
    });

    // const result = await prisma.product.groupBy({
    //   by: ["userId"],
    //   _count: { id: true },
    // });

    // const result = await prisma.product.groupBy({
    //   by: ["userId"],
    //   _sum: { price: true },
    //   having: { userId: 4 },
    // });

    //=================findMany==============
    // const result = await prisma.product.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.product.findMany({
    //   where: { metaTitle: "dgeerte" },
    //   select: { id: true },
    // });

    //============findFirst()=================
    // const result = await prisma.product.findFirst();

    //============find orderBy=================
    //const result = await prisma.product.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.product.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.product.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.product.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.product.findMany({
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
    const result = await prisma.product.update({
      where: { id: 4 },
      data: {
        firstName: "Mouse",
        metaTitle: "User friendly",
        slug: "ljkhgfds",
        summary: "very good",
        price: 3000,
        discount: 300,
        userId: 4,
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
    const result = await prisma.product.delete({
      where: { id: 3 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
