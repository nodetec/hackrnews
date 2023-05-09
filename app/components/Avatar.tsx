import { nip19 } from 'nostr-tools';
import React, { useState } from 'react'
import { DUMMY_PROFILE_API } from '../lib/avatars';
import { userStore } from '../stores/user';

export const Avatar = () => {
  const  pubkey = userStore(state => state.pubkey)
  const [picture, setPicture] = useState(
    DUMMY_PROFILE_API(nip19.npubEncode(pubkey))
  );

  return (
    <button className='ghost-round-button p-0 overflow-hidden'>
      <img src={picture}  className="w-8 h-8 rounded"/>
    </button>
  )
}
