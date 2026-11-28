import { Invoice } from '../types/invoiceType.ts';

interface InvoiceRowProps {
    data: Invoice;
}

export default function InvoiceRow(props: InvoiceRowProps) {
    return <tr>
        <td>{props.data.customer.name}</td>
        <td>{props.data.amount}</td>
        <td>{props.data.issueDate}</td>
        <td>{props.data.dueDate}</td>
        <td>{props.data.status === 'paid' ? 'Paga' : 'Pendente'}</td>
    </tr>;
}
