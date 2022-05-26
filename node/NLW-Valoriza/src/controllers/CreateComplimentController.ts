import { Request, Response } from 'express';
import { CreateComplimentServices } from '../services/CreateComplimentService';

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, user_sender, message } = request.body;

    const createComplimentServices = new CreateComplimentServices();

    const compliment = await createComplimentServices.execute({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
