import AuthForm from '@/app/auth-form'
import Logo from '@/components/ui/logo'
import Image from 'next/image'
import loginSvg from '/public/login.svg'

export default function Home() {
  return (
    <div className="h-screen w-screen grid grid-cols-6 gap-12 place-content-center">
      <div className="col-span-2 col-start-2 my-auto">
        <Logo />
        <p className="text-xl text-center text-gray-600 pb-3">
          Welcome back!
        </p>
        <AuthForm />
      </div>
      <div className="col-span-2 h-screen grid justify-start place-content-center">
        <div className="rounded-lg bg-purple-primary px-6 py-24">
          <Image
            src={loginSvg}
            alt="login background"
            width={520}
            height={368}
            priority
          />
          <h3 className="text-3xl text-white text-center mt-4">
            Compensation management <br /> made easy
          </h3>
        </div>
      </div>
    </div>
  )
}
