import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.cart.create({
    //   data: {
    //     title: "ghgjgfd",
    //     sessionId:"5",
    //     token: "gfhgfhjutyfgh",
    //     status:"jhfdghhejskj",
    //     firstName: "Juneee",
    //     middleName: "rtsd",
    //     lastName: "Doe",
    //     mobile: "01111111110",
    //     email: "Jhon7@gmail.com",
    //     city: "Dhaka",
    //     country: "Bangladesh",
    //     userId: 1,
    //   },
    // });

    //===========Insert Many=======================

    const result = await prisma.cart.createMany({
      data: [
        {
          title: "ghgjgfdfd",
          sessionId: "7",
          token: "gfhvcgfhjutyfgh",
          status: "jhfdgdfdhhejskj",
          firstName: "Jany",
          middleName: "2",
          lastName: "Doe",
          mobile: "01111111112",
          email: "Jhon2@gmail.com",
          city: "Delhi",
          country: "India",
          userId: 2,
        },
        {
          title: "ghgjgfd",
          sessionId: "4",
          token: "gfhgfhjutyfgh",
          status: "jhfdghhejskj",
          firstName: "Jack",
          middleName: "3",
          lastName: "Doe",
          mobile: "01111111113",
          email: "Jhon3@gmail.com",
          city: "Islamabad",
          country: "Pakistan",
          userId: 5,
        },
        {
          title: "ghgjetgfd",
          sessionId: "8",
          token: "gfhgfhghjutyfgh",
          status: "jhfdghrehejskj",
          firstName: "Jim",
          middleName: "4",
          lastName: "Doe",
          mobile: "01111111114",
          email: "Jhon4@gmail.com",
          city: "Beijing",
          country: "China",
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

    //=================findMany==============
    // const result = await prisma.cart.findMany();

    //============findMany Where And Select=================
    const result = await prisma.cart.findMany({
      where: { city: "Dhaka" },
      select: { id: true },
    });

    //============findFirst()=================
    //const result = await prisma.cart.findFirst();

    //============find orderBy=================
    //const result = await prisma.cart.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.cart.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.cart.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.cart.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.cart.findMany({
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
    const result = await prisma.cart.update({
      where: { id: 4 },
      data: {
        title: "Mobile",
        sessionId: "8",
        token: "gfhgfhghjutyfgh",
        status: "jhfdghrehejskj",
        firstName: "Jimy",
        middleName: "4",
        lastName: "Doe",
        mobile: "01111111114",
        email: "Jhon4@gmail.com",
        city: "Tokyo",
        country: "Japan",
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
    const result = await prisma.cart.delete({
      where: { id: 2 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
