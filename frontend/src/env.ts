import { z } from 'zod';

// cria o schema de validação das variáveis .env
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
});

// chama a validação fazendo o "parse" para verificar que está tudo certo com o .env
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables: ', parsedEnv.error.flatten().fieldErrors);

  throw new Error('Invalid environment variables');
}

export const env = parsedEnv.data;
