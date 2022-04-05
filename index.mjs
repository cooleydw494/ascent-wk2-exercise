import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const role = 'seller';
console.log(`Your role is ${role}.`);

const stdlib = loadStdlib(process.env);
console.log(`The consensus network is ${stdlib.connector}.`);

const suStr = stdlib.standardUnit;
const auStr = stdlib.atomicUnit;
console.log(`The standard until is ${suStr}`);
console.log(`The atomic unit is ${auStr}`);

(async () => {
  const commonInteract = {};

  // SELLER
  if (role === 'seller') {
    const sellerInteract = { ...commonInteract };

    const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
    const ctc = acc.contract(backend);
    await backend.Seller(ctc, sellerInteract);
  }

  // BUYER
  else {
    const buyerInteract = { ...commonInteract };
  }
})();