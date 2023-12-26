-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "document" TEXT NOT NULL,
    "tradingName" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "coverageArea" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Partner_document_key" ON "Partner"("document");
