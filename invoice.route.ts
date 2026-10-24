import { Router } from 'express';

import { findManyInvoices } from './invoice.service.ts';

const router = Router();

router.get('/', (req, res) => {
    const invoices = findManyInvoices();

    res.status(200).json(invoices);
});

export default router;
