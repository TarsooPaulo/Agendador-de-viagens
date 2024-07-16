import { X, User } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export default function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] space-y-5 bg-zinc-900 rounded-xl py-5 px-6 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button onClick={closeConfirmTripModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>
        <div className="flex flex-wrap gap-2"></div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="gap-2 flex items-center px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="text-zinc-400 size-5" />
            <input
              onChange={event => setOwnerName(event.target.value)}
              name="email"
              placeholder="Seu nome completo"
              className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"
            />
          </div>

          <div className="gap-2 flex items-center px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <User className="text-zinc-400 size-5" />
            <input
              onChange={event => setOwnerEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
