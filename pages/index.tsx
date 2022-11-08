import { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import CatCard from '../interfaces/CatCard'
import axios from 'axios'

enum OrderEnum{
  ASC = "ASC",
  DESC = "DESC",
  RAND = "RAND"
}

const List = () => {
  const [cats, setCats] = useState<any>([])
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.ASC)
  const [page, setPage] = useState(0)
  const [loading , setLoading] = useState(false)

  const fetchCats = async (page:number, order : string) => {
    try{
      setLoading(true)
      const limit = 15;
      const response = await axios.get(`api/cats?limit=${limit}&page=${page}&order=${order}`)
      const data = response.data
      setCats(data)
    }catch(e){
      // a error screen will automatically be rendered from error boundary component
      console.log(e)
    }finally{
      setLoading(false)
    }
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
        <h1 className={styles.title} data-testid="title">
            Cats
        </h1>
        <div className={styles.order} data-testid="order">
          <label>order : </label>
          <select name="order" id="order" defaultValue={order} onChange={onOptionChangeHandler}>
            <option value={OrderEnum.RAND}>Random</option>
            <option value={OrderEnum.ASC}>Ascending</option>
            <option value={OrderEnum.DESC}>Descending</option>
          </select>
        </div>

        { loading ? 
          <h4 style={{textAlign:"center"}}>Loading..</h4> : 
          <div className={styles.grid} data-testid="cards">
          {
            cats.map(({id,url}: CatCard) => {
              console.log(id)
              return <Card key = {id} id = {id} url = {url}  />
            })
          }
        </div>
        }
        {
          // order !== OrderEnum.RAND && 
            <div className={styles.pagination} data-testid="pagination">
              <button disabled = {page === 0} onClick={prevPage}>{'<'}</button>
              <button onClick={nextPage}>{'>'}</button>
            </div>
        }    
    </div>
  )
}


export default List