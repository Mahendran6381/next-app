/*
  Warnings:

  - Made the column `alternateMobile` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gstnum` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "alternateMobile" SET NOT NULL,
ALTER COLUMN "alternateMobile" SET DEFAULT '',
ALTER COLUMN "gstnum" SET NOT NULL,
ALTER COLUMN "gstnum" SET DEFAULT '';
