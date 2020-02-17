import { DefaultRepository } from '../../repositories/DefaultRepository';
import { DefaultModel } from '../../models/DefaultModel';

export class DefaultService {
  private defaultRepository: DefaultRepository;

  constructor() {
    this.defaultRepository = new DefaultRepository();
  }

  async defaultAction(): Promise<DefaultModel> {
    try {
      return await this.defaultRepository.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}
