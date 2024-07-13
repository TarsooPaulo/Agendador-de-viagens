import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailToInvite: (email: string) => void;
}

export default function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] space-y-5 bg-zinc-900 rounded-xl py-5 px-6 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>

                <button onClick={() => removeEmailToInvite(email)}>
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="gap-2 flex items-center p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg"
        >
          <div className="px-2 flex flex-1 gap-2 items-center">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
              className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"
            />
          </div>

          <Button type="submit" variant="primary">
            Convidar
            <Plus />
          </Button>
        </form>
      </div>
    </div>
  );
}