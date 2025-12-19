interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export function WhatsAppButton({ phoneNumber, message = 'Hello! I would like to get in touch.' }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Chat bubble with text */}
      <div className="relative animate-bounce-slow">
        <div className="relative bg-[#25D366] px-6 py-3 rounded-2xl rounded-br-none shadow-lg">
          <span className="text-white font-bold text-lg whitespace-nowrap">
            LET'S CHAT!
          </span>
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#25D366]"></div>
        </div>
      </div>
      
      {/* WhatsApp icon button */}
      <button
        onClick={handleClick}
        className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA59] hover:shadow-2xl c"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          viewBox="0 0 32 32" 
          className="h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828 0.738 5.48 2.016 7.778L0.152 31.848l8.318-2.114C10.708 31.13 13.28 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.334c-2.46 0-4.772-0.664-6.756-1.824l-0.486-0.29-5.044 1.28 1.314-4.816-0.318-0.504C3.212 21.162 2.666 18.64 2.666 16 2.666 8.636 8.636 2.666 16 2.666S29.334 8.636 29.334 16 23.364 29.334 16 29.334z"/>
          <path d="M22.624 18.926c-0.346-0.174-2.048-1.010-2.366-1.126-0.318-0.116-0.548-0.174-0.78 0.174-0.23 0.348-0.894 1.126-1.096 1.358-0.202 0.23-0.404 0.26-0.75 0.086-0.346-0.174-1.462-0.54-2.784-1.718-1.03-0.918-1.724-2.052-1.926-2.398-0.202-0.348-0.022-0.536 0.152-0.708 0.156-0.156 0.346-0.404 0.52-0.606 0.174-0.202 0.232-0.348 0.348-0.578 0.116-0.232 0.058-0.434-0.028-0.608-0.086-0.174-0.78-1.88-1.068-2.574-0.28-0.676-0.564-0.584-0.78-0.594-0.202-0.010-0.432-0.012-0.664-0.012s-0.606 0.086-0.924 0.434c-0.318 0.348-1.212 1.184-1.212 2.888s1.24 3.35 1.414 3.582c0.174 0.23 2.45 3.742 5.934 5.246 0.828 0.358 1.476 0.572 1.98 0.732 0.832 0.264 1.59 0.226 2.188 0.138 0.668-0.1 2.048-0.838 2.336-1.646 0.288-0.81 0.288-1.502 0.202-1.646-0.086-0.146-0.318-0.232-0.664-0.406z"/>
        </svg>
      </button>
    </div>
  )
}
