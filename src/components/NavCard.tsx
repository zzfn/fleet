import Image from 'next/image'
import {Tag} from "@oc/design";

const NavCard = ({record}:any) => {
  return <a rel="noreferrer" target='_blank' href={record.url} className='shadow rounded flex flex-col justify-between items-center p-6'>
      <h2>{record.title} &rarr;</h2>
      <p>

          <Image
              src={record.icon}
              alt={record.title}
              width={30}
              height={30}
          />
      </p>
      <p>{record.url}{record.local&&<Tag>内网</Tag>}</p>
  </a>
}
export default NavCard
