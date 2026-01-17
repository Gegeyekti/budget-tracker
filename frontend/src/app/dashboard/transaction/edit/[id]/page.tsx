"use client";

import TransactionForm from "@/pages/TransactionForm";
import { fetchTransactionById, editTransaction } from "@/services/transaction";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@/ui/Modal";
import LoadingSpinnerScreen from "@/ui/LoadingSpinnerScreen";
import { ModalProps } from "@/interfaces/IModal";
import { TransactionFormData } from "@/interfaces/ITransaction";

export default function EditTransactionPage() {
  const params = useParams<{ id: string}>();
  const id = params?.id;
  const router = useRouter();

  if (!id) {
    return <div>Invalid Transaction ID</div>
  }

  const [initialData, setInitialData] = useState<TransactionFormData>();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [modal, setModal] = useState<ModalProps | null>(null);

  const loadTransaction = async () => {
    try {
      const res = await fetchTransactionById(Number(id));
      const tx = res.data;

      setInitialData({
        type: tx.type,
        amount: tx.amount != null ? String(tx.amount) : "",
        date: tx.date ? new Date(tx.date).toISOString().slice(0, 10) : "",
        note: tx.note ?? "",
        categoryId: tx.category_id,
      });
    } catch (error) {
      if (error instanceof Error) {
        setModal({ message: error.message, type: "danger" });
      } else {
        setModal({ message: " Terjadi Kesalahan", type: "danger" });
      }
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
  if (!id) return;

  const fetchData = async () => {
    try {
      const res = await fetchTransactionById(Number(id));
      const tx = res.data;

      setInitialData({
        type: tx.type,
        amount: tx.amount != null ? String(tx.amount) : "",
        date: tx.date ? new Date(tx.date).toISOString().slice(0, 10) : "",
        note: tx.note ?? "",
        categoryId: tx.category_id,
      });
    } catch (error) {
      if (error instanceof Error) {
        setModal({ message: error.message, type: "danger" });
      } else {
        setModal({ message: "Terjadi Kesalahan", type: "danger" });
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]);


  const handleSubmit = async (form: TransactionFormData) => {
    setisSubmitting(true);
    try {
      await editTransaction(Number(id), {
        ...form,
      });

      setModal({
        type: "success",
        message: "Transaksi Berhasil Diperbarui",
      });
    } catch (error) {
      if (error instanceof Error) {
        setModal({ message: error.message, type: "danger" });
      } else {
        setModal({ message: " Terjadi Kesalahan", type: "danger" });
      }
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Transaksi</h1>
      {(loading || isSubmitting) && <LoadingSpinnerScreen />}
      {modal && (
        <Modal
          type={modal.type}
          message={modal.message}
          onOk={() => {
            setModal(null);
            if (modal.type === "success") {
              router.push("/dashboard/transaction");
            }
          }}
        />
      )}
      {initialData && (
        <TransactionForm initialData={initialData} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
