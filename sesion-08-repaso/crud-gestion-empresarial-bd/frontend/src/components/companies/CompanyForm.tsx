import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import FormularioModerno from "../ basic/FormularioModerno";
import { useCompanies } from "../../hooks/useCompanies";
import type { Company } from "../../types";

/**
 * Formulario para crear/editar empresas usando React 19 Forms
 * Usa useActionState y useFormStatus para manejo moderno de formularios
 */

interface Props {
  companyToEdit?: Company | null;
  onEditComplete?: () => void;
}

type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="btn btn-primary w-full">
      {pending
        ? "Guardando..."
        : isEditing
          ? "Actualizar Empresa"
          : "Crear Empresa"}
    </button>
  );
}

export default function CompanyForm({ companyToEdit, onEditComplete }: Props) {
  const { createCompany, updateCompany } = useCompanies();
  const isEditing = !!companyToEdit;

  // Action para manejar el submit del formulario (React 19)
  async function formAction(
    _prevState: FormState,
    formData: FormData,
  ): Promise<FormState> {
    const name = formData.get("name") as string;
    const industry = formData.get("industry") as string;
    const website = formData.get("website") as string;

    // Validaciones
    if (!name.trim()) {
      return {
        success: false,
        message: "El nombre es requerido",
        errors: { name: "El nombre es requerido" },
      };
    }

    // Preparar datos
    const data = {
      name: name.trim(),
      industry: industry.trim() || undefined,
      website: website.trim() || undefined,
    };

    // Crear o actualizar
    let result;
    if (isEditing) {
      result = await updateCompany(companyToEdit.id, data);
    } else {
      result = await createCompany(data);
    }

    if (result) {
      // Si es edición, llamar callback para cerrar edición
      if (isEditing) {
        onEditComplete?.();
      }

      return {
        success: true,
        message: isEditing
          ? "Empresa actualizada exitosamente"
          : "Empresa creada exitosamente",
      };
    }

    return {
      success: false,
      message: isEditing
        ? "Error al actualizar empresa"
        : "Error al crear empresa",
    };
  }

  const [state, submitAction, isPending] = useActionState(formAction, {
    success: false,
    message: "",
  });

  return (
    <>
      <form
        action={submitAction}
        className="bg-white p-6 rounded-lg shadow-md max-w-lg"
        key={companyToEdit?.id || "new"} // Resetea form cuando cambia la empresa
      >
        <h2 className="text-xl font-bold mb-4">
          {isEditing ? `Editar: ${companyToEdit.name}` : "Nueva Empresa"}
        </h2>

        {/* Mostrar mensajes de estado */}
        {state.message && !isPending && (
          <div
            className={`mb-4 p-3 rounded ${
              state.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {state.message}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Nombre *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={companyToEdit?.name || ""}
            className="input"
            required
            placeholder="Ej: Google"
          />
          {state.errors?.name && (
            <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="industry" className="block mb-2 font-medium">
            Industria
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            defaultValue={companyToEdit?.industry || ""}
            className="input"
            placeholder="Ej: Technology"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block mb-2 font-medium">
            Sitio Web
          </label>
          <input
            type="url"
            id="website"
            name="website"
            defaultValue={companyToEdit?.website || ""}
            className="input"
            placeholder="https://ejemplo.com"
          />
        </div>

        <div className="flex gap-2">
          <SubmitButton isEditing={isEditing} />
          {isEditing && onEditComplete && (
            <button
              type="button"
              onClick={onEditComplete}
              className="btn btn-secondary"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
      <FormularioModerno /> {/* Componente de ejemplo para comparar enfoques */}
    </>
  );
}
