import Image from 'next/image'
import logo_long from '/public/logo_long.png'

export default function Logo() {
  return (
    <div>
      <Image
        src={logo_long}
        height={50}
        className="mx-auto my-3"
        alt="CandorIQ Logo"
      />
    </div>
  )
}