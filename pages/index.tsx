import { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [cats, setCats] = useState([])
  const [order, setOrder] = useState('ASC')
  const [page, setPage] = useState(0)

  const fetchCats = async (page:number, order : string) => {
    const limit = 15;
    const response = await fetch(`api/cats?limit=${limit}&page=${page}&order=${order}`)
    const data = await response.json()
    setCats(data)
  }
  
  const nextPage = () => setPage((page) => page+1)
  const prevPage = () => setPage((page) => Math.max(0, page-1))
  
  const onOptionChangeHandler = (event:any) => {
    const {value} = event.target
    setOrder(value)
  } 

  useEffect(() => {
      fetchCats(page, order)
  }, [page, order])

  return (
    <div>
      
        <h1 className={styles.title}>
            Cats
        </h1>

        <div className={styles.order}>
          <label>order : </label>
          <select name="order" id="order" defaultValue={order} onChange={onOptionChangeHandler}>
            <option value="RAND">Random</option>
            <option value="ASC">Ascending</option>
            <option value="DESC">Descending</option>
          </select>
        </div>

        <div className={styles.grid}>
          {
            cats.map(({id,url}) => {
              console.log(id)
              return <Card key = {id} id = {id} url = {url}  />
            })
          }
        </div>
        {
          order !== 'RAND' && 
            <div className={styles.pagination}>
              <button disabled = {page === 0} onClick={prevPage}>{'<'}</button>
              <button onClick={nextPage}>{'>'}</button>
            </div>
        }    
    </div>
  )
}
