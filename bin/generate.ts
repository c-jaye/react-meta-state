/* eslint-disable import-x/no-nodejs-modules */

import { buildTokens } from "../src/util/generation"
import { resolve } from "path"

void buildTokens(
    resolve(import.meta.dirname, "../playground/assets/scss.ts"),
    resolve(import.meta.dirname, "../playground/assets/scss/tokens"),
)
