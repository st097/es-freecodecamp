// 1 Compare Scopes of the var and let Keywords


"use strict";
  let i = "function scope";
  if (!true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  } else {
  console.log("Function scope i is: ", i);
  return i;
  }