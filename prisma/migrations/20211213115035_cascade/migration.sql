-- DropForeignKey
ALTER TABLE "Audio" DROP CONSTRAINT "Audio_authorId_fkey";

-- AddForeignKey
ALTER TABLE "Audio" ADD CONSTRAINT "Audio_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
