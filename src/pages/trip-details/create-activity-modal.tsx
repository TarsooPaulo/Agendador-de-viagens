import { Calendar, Tag, X } from "lucide-react";
import Button from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export default function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] space-y-5 bg-zinc-900 rounded-xl py-5 px-6 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar Atividade</h2>
            <button onClick={closeCreateActivityModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem vizualizar as atividades
          </p>
        </div>
        <div className="flex flex-wrap gap-2"></div>

        <form className="space-y-3">
          <div className="gap-2 flex items-center px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="qual a atividade?"
              className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="gap-2 flex-1 flex items-center px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="datetime-local"
                name="occours_at"
                placeholder="Data e horário da atividade"
                className="flex-1 outline-none bg-transparent text-lg placeholder:text-zinc-400"
              />
            </div>
          </div>

          <Button variant="primary" size="full">
            Salvar Atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
