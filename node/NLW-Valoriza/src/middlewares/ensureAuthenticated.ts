import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //Receber token
  const authToken = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authToken) return response.status(401).end();
  // const [, token] = authToken.split(' ');
  try {
    const { sub } = verify(
      authToken.replace('Bearer ', ''),
      '3bb46803e76df7de96b840c9f722ab34'
    ) as IPayload;

    // Recuperando informação do usuário
    request.user_id = sub;
    return next();
    
  } catch {
    return response.status(401).end();
  }
}
