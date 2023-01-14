export interface Iuser {
  email?: string
  token?: string
}

export interface Icontext extends Iuser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface IauthProvider {
  children: JSX.Element
}
