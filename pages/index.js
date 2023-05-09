import styles from '../styles/Home.module.css'

export default function Ssr({ data }) {

  return (
    <div className={styles.body}>
      <h1>SSR</h1>
      <div className={styles.contents}>
        <div className={styles.container}>
        { 
          data?.map((image, index) => {
            return (
              <div className={styles.card} key={index}>
                <div className={styles.images}>
                  <img
                    src={image.thumbnailUrl}
                    width={150}
                    height={150}
                  />
                </div>
                <div>{image.title}</div>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=500')
  const data = await res.json()

  return { props: { data } }
}
