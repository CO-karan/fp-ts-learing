import { pipe } from "fp-ts/lib/function";
import * as R from "fp-ts/Random";
import * as A from "fp-ts/Array";
import { WithIdentity } from "../types/commons";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const pickChar = (index: number) => characters[index];
const joinStringArray = A.reduce<string, string>("", (b, a) => b.concat(a));

export const getRandomString = (length: number = 6) =>
  pipe(A.makeBy(length, R.randomInt(0, 61)), A.map(pickChar), joinStringArray);

export const findById =
  (id: string) =>
  <T>(identity: WithIdentity<T>) =>
    identity.id == id;

export const filterbyId =
  (id: string) =>
  <T>(identity: WithIdentity<T>) =>
    identity.id != id;

export const negate = (bool: boolean) => !bool;

export const doVoid = () => {};
