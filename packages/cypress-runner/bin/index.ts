#!/usr/bin/env node
import "source-map-support/register";

import { run } from "../index";
import { error } from "../lib/log";

run()
  .then((result) => {
    if (!result) {
      process.exit(0);
    }
    const overallFailed = result.failed + result.skipped;
    if (overallFailed > 0) {
      process.exit(overallFailed);
    }
    process.exit(0);
  })
  .catch((err) => {
    error(err.stack);
    process.exit(1);
  });
