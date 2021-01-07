import { PrismaClient } from "@prisma/client";

export let prisma;
export let prismaWrite;

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
	prismaWrite = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	if (!global.prismaWrite) {
		global.prismaWrite = new PrismaClient();
	}

	prisma = global.prisma;
	prismaWrite = global.prismaWrite;
}

//export default prisma;
