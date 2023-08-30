-- CreateTable
CREATE TABLE `Country` (
    `name` VARCHAR(191) NOT NULL,
    `population` BIGINT NULL,
    `capital` VARCHAR(191) NULL,
    `continent` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,
    `subregion` VARCHAR(191) NULL,
    `flag` VARCHAR(191) NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
