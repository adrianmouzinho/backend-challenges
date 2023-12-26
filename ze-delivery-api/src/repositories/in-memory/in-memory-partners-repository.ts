import { type Partner } from '../../entities/partner'
import { type PartnersRepository } from '../partners-repository'

export class InMemoryPartnersRepository implements PartnersRepository {
  public items: Partner[] = []

  async findById (id: string): Promise<Partner | null> {
    const partner = this.items.find((item) => item.id === id)

    if (partner === undefined) {
      return null
    }

    return partner
  }

  async findByDomument (document: string): Promise<Partner | null> {
    const partner = this.items.find((item) => item.document === document)

    if (partner === undefined) {
      return null
    }

    return partner
  }

  async save (partner: Partner): Promise<void> {
    this.items.push(partner)
  }
}
