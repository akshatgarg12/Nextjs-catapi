import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import styles from '../styles/Home.module.css'
import CatProfileInterface from '../interfaces/CatProfile'

const ProfilePage = () => {
  const router = useRouter()
  const {id} = router.query
  const [cat, setCat] = useState<CatProfileInterface>()
  
  useEffect(() => {
    const getCatInfo = async () => {
      const response = await fetch(`/api/cats/${id}`)
      const data = await response.json()  
      setCat(data)
  }
    if(id) getCatInfo()
  }, [id])

  if(!cat) return <h4>Loading..</h4>

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