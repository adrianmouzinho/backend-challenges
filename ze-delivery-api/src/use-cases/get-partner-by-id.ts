import { type Partner } from '../entities/partner'
import { type PartnersRepository } from '../repositories/partners-repository'

interface GetPartnerByIdRequest {
  id: string
}

type GetPartnerByIdResponse = Partner

export class GetPartnerById {
  constructor (
    private readonly partnersRepository: PartnersRepository
  ) {}

  async execute ({ id }: GetPartnerByIdRequest): Promise<GetPartnerByIdResponse> {
    const partner = await this.partnersRepository.findById(id)

    if (partner === null) {
      throw new Error('Partner not found')
    }

    return partner
  }
}
