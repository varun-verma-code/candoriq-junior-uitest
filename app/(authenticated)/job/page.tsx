import { cookies } from 'next/headers'
import AccountForm from '@/app/(authenticated)/job/_components/account-form'
import { createServerClient } from '@supabase/ssr'

export default async function Account() {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )


  const {
    data: { session },
  } = await supabase.auth.getSession()

  return <AccountForm session={session} />
}