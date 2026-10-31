// import 'dotenv/config';
// import { definePrismaConfig } from '@prisma/cli-engine';
// import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

// export default definePrismaConfig({
//   orm: ormConfig({
//     contract: "./src/prisma/contract.prisma",
//     db: {
//       connection: process.env['DATABASE_URL']!,
//     },
//   }),
// });

import "dotenv/config"; // 1. Ensure dotenv is imported at the very top
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // 2. Use a process.env fallback instead of env() to prevent syntax parsing crashes
    url: process.env.DATABASE_URL, 
  },
});
