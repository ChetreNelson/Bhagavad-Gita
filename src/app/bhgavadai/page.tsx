import Chat from '@/components/chat';
import Link from 'next/link';
import React from 'react'

const BhagvadAI = () => {
  return (
    <div>
      {/* <Chat/> */}
      {/* <Link href={"https://bot.writesonic.com/share/bot/cb860df5-5d96-46d7-bef1-35a4b67cbfdc"}>Click Me</Link> */}
      <iframe
       className='h-screen w-full'
        src="https://widget.writesonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=b2ade422-ab32-440b-84ac-d63d88b96888&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2Fcb860df5-5d96-46d7-bef1-35a4b67cbfdc%2Fintegrations"
      ></iframe>
    </div>
  );
}

export default BhagvadAI;
