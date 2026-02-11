import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

const api = {
  crear: async ({ name, apellido }: { name: string; apellido: string }) => {
    // Simula una llamada a API
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Creado:", { name, apellido });
  },
};

type FormState = {
  success: boolean;
  message: string;
};

function FormularioModerno() {
  // 1. UNA SOLA función para manejar todo
  async function formAction(
    _prevState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    const name = String(formData.get("name") ?? "").trim();
    const apellido = String(formData.get("apellido") ?? "").trim();
    const fullName = [name, apellido].filter(Boolean).join(" ");

    await api.crear({ name, apellido });
    if (fullName) {
      toast.success(`Bienvenido ${fullName}`, {
        className: "bg-emerald-600 text-white border-emerald-700",
      });
    } else {
      toast.success("Bienvenido", {
        className: "bg-emerald-600 text-white border-emerald-700",
      });
    }
    return { success: true, message: "Creado!" };
  }
  // 2. UN SOLO hook para estado + loading + errores
  const [state, submitAction, isPending] = useActionState(formAction, {
    success: false,
    message: "",
  });
  return (
    <div className="mt-10">
      <form action={submitAction} className="space-y-3 max-w-md">
        {" "}
        {/* ← Sin onSubmit, sin preventDefault */}
        <input
          name="name"
          defaultValue=""
          className="input"
          placeholder="Nombre"
        />{" "}
        {/* ← Sin onChange */}
        <input
          name="apellido"
          defaultValue=""
          className="input"
          placeholder="Apellido"
        />
        {/* // botón para enviar */}
        <button
          type="submit"
          className={
            isPending ? "btn btn-primary mx-3" : "btn btn-secondary mx-3"
          }
          disabled={isPending}
        >
          {isPending ? "Enviando..." : "Enviar con botón"}
        </button>
        {/* // Botón para enviar en modo componente separado */}
        <SubmitButton isPending={isPending} />
        {state.message && (
          <p className="text-sm text-emerald-600">{state.message}</p>
        )}
      </form>
    </div>
  );
}
function SubmitButton({ isPending }) {
  const { pending } = useFormStatus();
  return (
    <button
      className={pending ? "btn btn-primary " : "btn btn-secondary "}
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar con componente "}
    </button>
  );
}

export default FormularioModerno;
