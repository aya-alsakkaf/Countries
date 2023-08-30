/*
  Warnings:

  - You are about to drop the column `continent` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `flag` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Country` DROP COLUMN `continent`,
    DROP COLUMN `flag`,
    ADD COLUMN `flags` VARCHAR(191) NULL;
