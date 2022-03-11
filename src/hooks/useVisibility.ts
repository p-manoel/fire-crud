import { useState } from "react";

export default function useVisibility() {
  const [visible, setVisible] = useState<'table' | 'form'>('table');

  const showTable = () => setVisible('table');
  const showForm = () => setVisible('form');

  return {
    table: visible === 'table',
    form: visible === 'form',
    showTable, showForm
  }
}