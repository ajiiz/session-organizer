export enum LoginResponseMessages {
  Empty = "",
  Invalid = "Your provided email is invalid. Provide correct email or sign up.",
  Valid = "Your provided email is valid. Insert your password and sign in.",
  Error = "The error has occured when trying to sign in. Please try again."
}

export enum RegisterResponseMessages {
  Invalid = "Your provided email is invalid. Please insert correct email.",
  Error = "The error has occured when trying to sign up. Please try again."
}
