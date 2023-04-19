-- CreateTable
CREATE TABLE `comment` (
    `idcomment` INTEGER NOT NULL AUTO_INCREMENT,
    `comment` VARCHAR(1000) NULL,
    `post_idpost` INTEGER NOT NULL,

    INDEX `fk_comment_post_idx`(`post_idpost`),
    PRIMARY KEY (`idcomment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `post` (
    `idpost` INTEGER NOT NULL AUTO_INCREMENT,
    `postname` VARCHAR(255) NOT NULL,
    `postcontent` VARCHAR(1000) NULL,

    PRIMARY KEY (`idpost`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_post` FOREIGN KEY (`post_idpost`) REFERENCES `post`(`idpost`) ON DELETE NO ACTION ON UPDATE NO ACTION;
