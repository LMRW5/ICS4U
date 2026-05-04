import type { ModalProps } from '@/core/types';

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 p-4" onClick={onClose}>
      <div
        className="w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl bg-gray-950 text-gray-100 relative border border-gray-800 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};