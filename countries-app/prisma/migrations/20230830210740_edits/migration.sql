/*
  Warnings:

  - You are about to alter the column `population` on the `Country` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Country` MODIFY `population` INTEGER NULL;
