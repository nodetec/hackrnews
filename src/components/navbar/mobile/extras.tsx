'use client'

import { OutlineButton, Button } from '@/ui/buttons'
import { closeHandler } from '@/utils/fns/modals'
import { LogInIcon, LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Extras({ dialogId, children }: { dialogId: string, children: React.ReactNode }) {
  return (
    <>
      {/* User Settings and Account*/}
      <div className="flex flex-col gap-3">
        {children}

        <Link className='w-full' href="/login">
          <OutlineButton
            variant="primary"
            className="justify-start gap-3 w-full"
            flat
            onClick={() => closeHandler(dialogId, true)}
          >
            <LogInIcon className="w-5 h-5" />
            Login
          </OutlineButton>
        </Link>
      </div>

      {/* Logout Btn */}
      <div className="mt-auto">
        <Button
          variant="error"
          className="w-full"
          // onClick={closeFn}
          flat
        >
          <LogOutIcon className="w-5 h-5" />
          Logout
        </Button>
      </div>
      </>
  )
}
