import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ContactModalContextType {
  isOpen: boolean
  title: string
  openModal: (title?: string) => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

interface ContactModalProviderProps {
  children: ReactNode
}

export function ContactModalProvider({ children }: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('Get Free Consultation')

  const openModal = (modalTitle = 'Get Free Consultation') => {
    setTitle(modalTitle)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ContactModalContext.Provider value={{ isOpen, title, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider')
  }
  return context
}