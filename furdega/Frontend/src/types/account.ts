export type TokenRequest = {
  login: string
  password: string
}

export type ChangePasswordRequest = {
  login: string
  newPassword: string
  oldPassword: string
}
