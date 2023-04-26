import Image from 'next/image'

type CardProps = {
  src: string
  roles: string[]
}

const Card = ({ src, roles }: CardProps) => {
  return (
    <div className='w-52 rounded-md p-2 bg-black hover:shadow-lg transition-all duration-200 ease-in'>
      <Image
        src={src}
        width={200}
        height={200}
        alt='image profile'
        className='w-full aspect-square rounded-md object-cover'
      />
      <div className='flex flex-wrap gap-1 mt-1'>
        {roles.map((role) => {
          return (
            <span key={role} className='p-1 bg-white rounded-sm'>
              {role}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Card
