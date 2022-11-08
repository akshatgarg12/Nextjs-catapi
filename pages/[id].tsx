import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import styles from '../styles/Home.module.css'
import CatProfileInterface from '../interfaces/CatProfile'
import axios from 'axios'

const ProfilePage = () => {
  const router = useRouter()
  const {id} = router.query
  const [cat, setCat] = useState<CatProfileInterface>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getCatInfo = async () => {
      try{
        setLoading(true)
        const response = await axios.get(`/api/cats/${id}`)
        const data = response.data
        setCat(data)
      }catch(e){
        // a error screen will automatically be rendered from error boundary component
        console.error(e)
      }finally{
        setLoading(false)
      }
  }
    if(id) getCatInfo()
  }, [id])

  if(!cat || loading) return <h4>Loading..</h4>

  return (
    <div>
      <div className={styles.goBack}>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
      
      <Profile 
        id = {cat.id}
        url = {cat.url}
        name = {cat.name}
        description = {cat.description}
        origin = {cat.origin}
      />
    </div>
  );
}
 
export default ProfilePage;