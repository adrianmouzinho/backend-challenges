import { Partner, type Address, type CoverageArea } from '../entities/partner'
import { type PartnersRepository } from '../repositories/partners-repository'

interface CreatePartnerRequest {
  tradingName: string
  ownerName: string
  document: string
  coverageArea: CoverageArea
  address: Address
}

type CreatePartnerResponse = Partner

export class CreatePartner {
  constructor (
    private readonly partnersRepository: PartnersRepository
  ) {}

  async execute ({
    tradingName,
    ownerName,
    document,
    coverageArea,
    address
  }: CreatePartnerRequest): Promise<CreatePartnerResponse> {
    const partnerExists = await this.partnersRepository.findByDomument(document)

    if (partnerExists !== null) {
      throw new Error('Another partner already exists with this document')
    }

    const partner = new Partner({
      tradingName,
      ownerName,
      document,
      coverageArea,
      address
    })

    await this.partnersRepository.save(partner)

    return partner
  }
}
