export interface AuthUsecaseModel {
  message: string
  data: {
    access_token: string
    code: string
    creation: string
    description: string
    id: string
    language: string
    mail: string
    modification: string
    name_first: string
    name_last: string
  }
}