-- CreateTable
CREATE TABLE "Campus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT,
    "colour" TEXT NOT NULL,
    "archivedAt" TIMESTAMP(3),

    CONSTRAINT "Campus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionChannel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "maxEvents" INTEGER,
    "archivedAt" TIMESTAMP(3),
    "parentId" TEXT,

    CONSTRAINT "PromotionChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionRule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "weeksBefore" INTEGER NOT NULL,
    "archivedAt" TIMESTAMP(3),
    "promotionChannelId" TEXT NOT NULL,
    "promotionCategoryId" TEXT NOT NULL,

    CONSTRAINT "PromotionRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "subcategory" TEXT,
    "archivedAt" TIMESTAMP(3),

    CONSTRAINT "PromotionCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "isAllDay" BOOLEAN NOT NULL DEFAULT false,
    "contactName" TEXT NOT NULL,
    "status" TEXT,
    "isChurchCenterListing" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "archivedAt" TIMESTAMP(3),
    "promotionRuleId" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "colour" TEXT NOT NULL,
    "archivedAt" TIMESTAMP(3),

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventCampuses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventCampuses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EventTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventTags_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Campus_name_key" ON "Campus"("name") WHERE ("archivedAt" IS NULL);

-- CreateIndex
CREATE UNIQUE INDEX "PromotionChannel_name_key" ON "PromotionChannel"("name") WHERE ("archivedAt" IS NULL);

-- CreateIndex
CREATE UNIQUE INDEX "PromotionRule_name_key" ON "PromotionRule"("name") WHERE ("archivedAt" IS NULL);

-- CreateIndex
CREATE UNIQUE INDEX "PromotionCategory_name_key" ON "PromotionCategory"("name") WHERE ("archivedAt" IS NULL);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name") WHERE ("archivedAt" IS NULL);

-- CreateIndex
CREATE INDEX "_EventCampuses_B_index" ON "_EventCampuses"("B");

-- CreateIndex
CREATE INDEX "_EventTags_B_index" ON "_EventTags"("B");

-- AddForeignKey
ALTER TABLE "PromotionChannel" ADD CONSTRAINT "PromotionChannel_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "PromotionChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionRule" ADD CONSTRAINT "PromotionRule_promotionChannelId_fkey" FOREIGN KEY ("promotionChannelId") REFERENCES "PromotionChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionRule" ADD CONSTRAINT "PromotionRule_promotionCategoryId_fkey" FOREIGN KEY ("promotionCategoryId") REFERENCES "PromotionCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_promotionRuleId_fkey" FOREIGN KEY ("promotionRuleId") REFERENCES "PromotionRule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventCampuses" ADD CONSTRAINT "_EventCampuses_A_fkey" FOREIGN KEY ("A") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventCampuses" ADD CONSTRAINT "_EventCampuses_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTags" ADD CONSTRAINT "_EventTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTags" ADD CONSTRAINT "_EventTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
