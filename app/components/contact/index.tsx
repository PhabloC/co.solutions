"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, MessageCircleMore, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactSectionProps } from "./types";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type FormValues = z.infer<typeof contactSchema>;

export default function Contact({ className }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={cn("w-full py-24", className)}
      id="contato"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
        style={{ zIndex: 10 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Textos */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Preencha o formulário ao lado e eu entro em contato o mais rápido
              possível. Vamos juntos transformar suas ideias em uma solução
              digital que gere resultados reais para seu negócio.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">E-mail</p>
                  <p className="text-white font-medium">
                    contato@suaempresa.com
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageCircleMore className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Whatsapp</p>
                  <p className="text-white font-medium">+55 (11) 91234-5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome completo
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-mail
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar mensagem
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center font-medium">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center font-medium">
                  Ocorreu um erro ao enviar. Tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
