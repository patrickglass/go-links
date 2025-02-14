export interface User {
  admin: boolean
  created: string
  email: string
  id: number
  info_bar?: unknown
  keywords_validation_regex: string
  notifications: unknown
  org_edit_mode: string
  organization: string
  read_only_mode?: unknown
  role?: unknown
}
