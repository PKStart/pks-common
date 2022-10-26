import { BaseEntity, UUID } from './misc'

export interface CyclingChore {
  id: UUID
  name: string
  kmInterval: number
  lastKm: number
}

export interface Cycling extends BaseEntity {
  userId: UUID
  weeklyGoal: number
  monthlyGoal: number
  chores: CyclingChore[]
}
