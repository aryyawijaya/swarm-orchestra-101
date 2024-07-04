CREATE TABLE "counters" (
    "id" bigserial PRIMARY KEY,
    "count" numeric NOT NULL DEFAULT 0,
    "createdAt" timestamptz NOT NULL DEFAULT (now()),
    "updatedAt" timestamptz NOT NULL DEFAULT (now())
);

INSERT INTO "counters" DEFAULT VALUES;
