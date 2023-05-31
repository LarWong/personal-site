export interface Contacts {
  email: string,
  telephoneNumber: string
}

export interface AboutMe {
  imagePath: string,
  location: string,
  name: string,
  occupation: string,
  summary: string
}

export interface Overview {
  contacts: Contacts,
  aboutme: AboutMe
}
