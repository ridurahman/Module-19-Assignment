import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();
    //================Insert One=============
    // const result = await prisma.order.create({
    //   data: {
    //     title: "ghgjgfd",
    //     token: "gfhgfhjutyfgh",
    //     subTotal: 3432,
    //     itemDiscount: 343,
    //     tax: 324,
    //     total: 43643,
    //     discount: 657,
    //     grandTotal: 4304,
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

    //========Transactions & Rollback================

    const createOrder = prisma.order.create({
      data: {
        title: "ghgjgfd",
        token: "gfhgfhjutyfgh",
        subTotal: 3432,
        itemDiscount: 343,
        tax: 324,
        total: 43643,
        discount: 657,
        grandTotal: 4304,
        firstName: "juni",
        middleName: "moni",
        lastName: "Doe",
        mobile: "01111111123",
        email: "Jhon9@gmail.com",
        city: "Dhaka",
        country: "Bangladesh",
        userId: 1,
      },
    });

    const deleteCart = prisma.cart.delete({
      where: { id: 4 },
    });

    const result=await prisma.$transaction([createOrder, deleteCart])

    //===========Insert Many=======================

    // const result = await prisma.order.createMany({
    //   data: [
    //     {
    //       title: "ytghj",
    //       token: "nghfghytuy",
    //       subTotal: 34362,
    //       itemDiscount: 3453,
    //       tax: 3264,
    //       total: 43643,
    //       discount: 1508,
    //       grandTotal: 34304,
    //       firstName: "Jany",
    //       middleName: "2",
    //       lastName: "Doe",
    //       mobile: "01111111112",
    //       email: "Jhon2@gmail.com",
    //       city: "Delhi",
    //       country: "India",
    //       userId: 2,
    //     },
    //     {
    //       title: "uyhftyuu",
    //       token: "hgjutytutrt",
    //       subTotal: 3432,
    //       itemDiscount: 343,
    //       tax: 324,
    //       total: 43643,
    //       discount: 657,
    //       grandTotal: 4304,
    //       firstName: "Jack",
    //       middleName: "3",
    //       lastName: "Doe",
    //       mobile: "01111111113",
    //       email: "Jhon3@gmail.com",
    //       city: "Islamabad",
    //       country: "Pakistan",
    //       userId: 4,
    //     },
    //     {
    //       title: "ghgjgfd",
    //       token: "gfhgfhjutyfgh",
    //       subTotal: 3432,
    //       itemDiscount: 343,
    //       tax: 324,
    //       total: 43643,
    //       discount: 657,
    //       grandTotal: 4304,
    //       firstName: "Jim",
    //       middleName: "4",
    //       lastName: "Doe",
    //       mobile: "01111111114",
    //       email: "Jhon4@gmail.com",
    //       city: "Beijing",
    //       country: "China",
    //       userId: 4,
    //     },
    //   ],
    // });

    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    console.log(e);
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
    const result = await prisma.order.findMany();

    //============findMany Where And Select=================
    // const result = await prisma.order.findMany({
    //   where: { userId: 4 },
    //   select: { id: true },
    // });

    //============findFirst()=================
    //const result = await prisma.order.findFirst();

    //============find orderBy=================
    //const result = await prisma.order.findMany({ orderBy: { id: "desc" } });

    //============Find Last using findFirst()=================
    //const result = await prisma.order.findFirst({ orderBy: { id: "desc" } });

    //===========Find With Limit Skip========================

    //Retrieve the first 5 users
    // const result = await prisma.order.findMany({
    //   take: 5,
    // });

    //Retrieve the next 5 users
    // const result = await prisma.order.findMany({
    //   skip: 5,
    //   take: 5,
    // });

    //Retrieve the last 5 users
    // const result = await prisma.order.findMany({
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
    const result = await prisma.order.update({
      where: { id: 7 },
      data: {
        title: "ghgjgfd",
        token: "gfhgfhjutyfgh",
        subTotal: 3432,
        itemDiscount: 343,
        tax: 324,
        total: 43643,
        discount: 657,
        grandTotal: 4304,
        firstName: "Jimy",
        middleName: "4",
        lastName: "Doe",
        mobile: "01111111114",
        email: "Jhon4@gmail.com",
        city: "Tokyo",
        country: "Japan",
        userId: 2,
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
    const result = await prisma.order.delete({
      where: { id: 1 },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
