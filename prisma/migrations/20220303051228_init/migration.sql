-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "content" VARCHAR(500) NOT NULL,
    "isDone" BOOLEAN NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "todo_id_key" ON "todo"("id");
