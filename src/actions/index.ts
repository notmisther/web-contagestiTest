import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { promises as fs } from "node:fs";

const leadSchema = z.object({
  nombres: z.string().trim().min(2, "Ingresa tus nombres"),
  apellidos: z.string().trim().min(2, "Ingresa tus apellidos"),
  celular: z
    .string()
    .trim()
    .min(9, "Ingresa un número válido")
    .max(15, "Ingresa un número válido"),
  medioContacto: z.enum(["whatsapp", "llamada"], {
    message: "Selecciona cómo prefieres que te contactemos",
  }),
  servicioInteres: z.string().trim().optional(),
  mensaje: z
    .string()
    .trim()
    .max(500, "Tu mensaje no debe superar los 500 caracteres")
    .optional(),
});

type Lead = z.infer<typeof leadSchema> & {
  id: string;
  createdAt: string;
};

export const server = {
  submitLead: defineAction({
    accept: "form",
    input: leadSchema,
    handler: async (input) => {
      const fileUrl = new URL("../../data/leads.json", import.meta.url);

      let existingLeads: Lead[] = [];

      try {
        const fileContent = await fs.readFile(fileUrl, "utf-8");
        existingLeads = JSON.parse(fileContent) as Lead[];
      } catch {
        existingLeads = [];
      }

      const newLead: Lead = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        nombres: input.nombres,
        apellidos: input.apellidos,
        celular: input.celular,
        medioContacto: input.medioContacto,
        servicioInteres: input.servicioInteres || "",
        mensaje: input.mensaje || "",
      };

      existingLeads.push(newLead);

      await fs.mkdir(new URL("../../data/", import.meta.url), {
        recursive: true,
      });
      await fs.writeFile(
        fileUrl,
        JSON.stringify(existingLeads, null, 2),
        "utf-8",
      );

      return {
        success: true,
        message:
          "Gracias. Recibimos tus datos correctamente y pronto nos pondremos en contacto contigo.",
      };
    },
  }),
};
