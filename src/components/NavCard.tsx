import Image from 'next/image'
const NavCard = ({record}:any) => {
  return <a rel="noreferrer" target='_blank' href={record.url} className='hover:scale-105 shadow rounded flex flex-col justify-between items-center p-6'>
      <h2>{record.title} &rarr;</h2>
      <p>

          <Image
              src={record.icon||'https://cdn.orluma.ltd/midway/reactjs-icon.svg'}
              alt={record.title}
              width={30}
              height={30}
          />
      </p>
      <p>{record.url}{record.local&&<span>公网</span>}</p>
  </a>
}
export default NavCard
