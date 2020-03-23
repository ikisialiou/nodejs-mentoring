import { DefaultRepository } from '../../repositories/DefaultRepository';
import { DefaultModel } from '../../models/DefaultModel';

export class DefaultService {
  private defaultRepository: DefaultRepository;

  constructor() {
    this.defaultRepository = new DefaultRepository();
  }

  async defaultAction(): Promise<DefaultModel> {
    return await this.defaultRepository.findAll();
  }
}
