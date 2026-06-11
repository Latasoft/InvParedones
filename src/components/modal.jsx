import { CheckCircle2 } from "lucide-react";

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Solicitud enviada",
  message = "Hemos recibido correctamente tus datos. Nos contactaremos contigo a la brevedad.",
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-in fade-in zoom-in duration-200">

        <CheckCircle2
          size={56}
          className="text-green-600 mx-auto mb-5"
        />

        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          {title}
        </h3>

        <p className="text-slate-600 leading-relaxed mb-8">
          {message}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#8bc34a] text-white py-3 rounded-xl font-semibold hover:bg-[#7cb342] transition"
        >
          Aceptar
        </button>

      </div>

    </div>
  );
}