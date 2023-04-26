interface ButtonProps {
  label: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Button = ({ label, type = 'button', onClick }: ButtonProps) => {
  return (
    <button
      className='bg-purple-500 text-white rounded-sm text-center active:-translate-y-1 transition-transform ease-linear duration-200 py-2 px-4 font-semibold text-center'
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
