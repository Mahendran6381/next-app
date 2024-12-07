-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMINISTRATION', 'EXECUTIVE', 'FACTORY', 'GUEST');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'GUEST';

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "alternateMobile" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "mobile" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "gstnum" TEXT,
    "createdByUserId" INTEGER NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
