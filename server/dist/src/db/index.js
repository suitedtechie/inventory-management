"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// src/db/index.ts
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
