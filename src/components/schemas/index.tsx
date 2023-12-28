import zod from 'zod';

export const schema = zod.object({
  cardNumber: zod.string().min(19, 'Numero do cartão deve ter 19 digitos'),
  cardHolderName: zod
    .string()
    .min(3, 'Nome do titular deve ter no minimo 3 caracteres')
    .max(20, 'Nome do titular deve ter no maximo 20 caracteres'),
  validade: zod.string().min(5, 'Validade deve ter no minimo 5 caracteres'),
  codigoSeguranca: zod
    .string()
    .min(3, 'Codigo de segurança deve ter no minimo 3 caracteres'),
});
