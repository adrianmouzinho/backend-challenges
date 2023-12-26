import { type Partner } from '../entities/partner'

export interface PartnersRepository {
  findById: (id: string) => Promise<Partner | null>
  findByDomument: (document: string) => Promise<Partner | null>
  save: (partner: Partner) => Promise<void>
}
