import Image from 'next/image'
const NavCard = ({record}:any) => {
  return <a rel="noreferrer" target='_blank' href={record.url} className='shadow rounded flex flex-col justify-between items-center p-6'>
      <h2>{record.title} &rarr;</h2>
      <p>
          <Image
              src="https://cdn.orluma.ltd/midway/star.svg"
              alt={record.title}
              width={80}
              height={80}
          />
      </p>
  </a>
}
export default NavCard
