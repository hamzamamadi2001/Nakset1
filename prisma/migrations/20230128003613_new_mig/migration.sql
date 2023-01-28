-- AlterTable
ALTER TABLE `Product` ADD COLUMN `baseQuantity` DOUBLE NULL,
    ADD COLUMN `city` INTEGER NULL;

-- CreateTable
CREATE TABLE `Order` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `order` LONGTEXT NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `payed` BOOLEAN NOT NULL DEFAULT false,
    `currency` VARCHAR(191) NOT NULL,
    `currencyValue` DOUBLE NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,

    UNIQUE INDEX `Order_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `country` TEXT NULL,
    `province` TEXT NULL,
    `city` TEXT NULL,
    `postal` TEXT NULL,
    `phone` TEXT NULL,
    `street` TEXT NULL,

    UNIQUE INDEX `id`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Citys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NULL,
    `country` INTEGER NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Countrys` (
    `id` INTEGER NOT NULL,
    `name` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotRegistredEmails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
