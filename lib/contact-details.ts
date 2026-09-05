export function isValidEmail(value: string) {
  return value.length <= 160 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return /^[+\d\s().-]+$/.test(value) && digits.length >= 7 && digits.length <= 15
}

export function splitContact(value: string) {
  const contact = value.trim()
  if (isValidEmail(contact)) return { email: contact, phone: '' }
  if (isValidPhone(contact)) return { email: '', phone: contact }
  return null
}
