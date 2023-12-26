import { randomUUID } from 'node:crypto'

export interface CoverageArea {
  type: string
  coordinates: any[]
}

export interface Address {
  type: string
  coordinates: any[]
}

export interface PartnerProps {
  tradingName: string
  ownerName: string
  document: string
  coverageArea: CoverageArea
  address: Address
}

export class Partner {
  private readonly _id: string
  private readonly props: PartnerProps

  constructor (props: PartnerProps, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
  }

  get id (): string {
    return this._id
  }

  get tradingName (): string {
    return this.props.tradingName
  }

  get ownerName (): string {
    return this.props.ownerName
  }

  get document (): string {
    return this.props.document
  }

  get coverageArea (): CoverageArea {
    return this.props.coverageArea
  }

  get address (): Address {
    return this.props.address
  }
}
