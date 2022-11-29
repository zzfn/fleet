import styles from "../../styles/Home.module.css";
import Image from 'next/image'
const NavCard = ({record}:any) => {
  return <a rel="noreferrer" target='_blank' href={record.url} className={styles.card}>
      <h2>{record.title} &rarr;</h2>
      <p>
          <Image
              src="https://cdn.jsdelivr.net/gh/walkxhub/dashboard-icons/png/amazon.png"
              alt={record.title}
              width={80}
              height={80}
          />
      </p>
  </a>
}
export default NavCard
