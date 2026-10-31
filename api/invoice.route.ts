import { Router } from 'express';

import { findInvoiceById, findManyInvoices } from './invoice.service.ts';

const router = Router();

router.get('/', (_req, res) => {
  const invoices = findManyInvoices();

  res.status(200).json(invoices);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const check = !id || id < 1 || !Number.isInteger(id);

  if (check)
    res.status(400).json({
      error: {
        status: 400,
        message: 'Indentificador inválido.'
      }
    });

  const invoice = findInvoiceById(id);

  res.status(200).json(invoice);
});

export default router;
