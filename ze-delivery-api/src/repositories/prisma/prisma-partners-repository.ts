import { type Partner } from '../../entities/partner'
import { prisma } from '../../utils/prisma'
import { type PartnersRepository } from '../partners-repository'

export class PrismaPartnersRepository implements PartnersRepository {
  public items: Partner[] = []

  async findById (id: string): Promise<Partner | null> {
    const partner = prisma.partner.findUnique({
      where: {
        id
      }
    })

    if (partner === null) {
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
