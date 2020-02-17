import { DefaultRepository } from '../../repositories/DefaultRepository';

export class DefaultService {
  private defaultRepository: DefaultRepository;

  constructor() {
    this.defaultRepository = new DefaultRepository();
  }

  defaultAction(): string {
    return this.defaultRepository.findAll();
  }
}
