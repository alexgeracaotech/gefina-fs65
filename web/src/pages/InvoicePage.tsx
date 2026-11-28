import { useState, useEffect } from 'react';

import { Invoice } from '../types/invoiceType.ts';

import InvoiceTable from '../components/InvoiceTable.tsx';

export default function InvoicePage() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getInvoices () {
            setError(null);

            try {
                const response = await fetch('/api/invoices');
                const datas = await response.json();
        
                setInvoices(datas);
            } catch {
                setError('Não foi possível obter relação de faturas.');
            } finally {
                setLoading(false);
            }
        }
    
        getInvoices();
    }, []);


    return <>
        <h1>Faturas</h1>

        <main>
            {loading ? <p>Carregando...</p> : error ? <p>{error}</p> : <InvoiceTable datas={invoices} />}
        </main>
    </>;
}
