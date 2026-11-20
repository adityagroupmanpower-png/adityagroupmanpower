import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function normalizeDatabaseUrl(value: string | undefined) {
  if (!value) return value;

  const schemeEnd = value.indexOf("://");
  const pathStart = value.indexOf("/", schemeEnd + 3);
  if (schemeEnd === -1 || pathStart === -1) return value;

  const authorityStart = schemeEnd + 3;
  const authority = value.slice(authorityStart, pathStart);
  const lastAt = authority.lastIndexOf("@");
  const credentialsSeparator = authority.indexOf(":");

  if (lastAt === -1 || credentialsSeparator === -1) return value;

  const credentials = authority.slice(0, lastAt);
  const host = authority.slice(lastAt + 1);
  const username = credentials.slice(0, credentialsSeparator);
  const password = credentials.slice(credentialsSeparator + 1).replaceAll("@", "%40");

  return `${value.slice(0, authorityStart)}${username}:${password}@${host}${value.slice(pathStart)}`;
}

const databaseUrl = normalizeDatabaseUrl(process.env.DATABASE_URL);
const useWindowsDevelopmentAdapter =
  process.platform === "win32" && process.env.NODE_ENV !== "production";
const adapter = databaseUrl && useWindowsDevelopmentAdapter
  ? new PrismaPg({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    })
  : undefined;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(adapter ? { adapter } : undefined);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
