import Image from "next/image";
import styles from '../styles/Home.module.css'
import CatProfileInterface from '../interfaces/CatProfile'

const Profile = ({id, url, name, origin, description}:CatProfileInterface) => {
    return (
        <div className={styles.profile}>
            <Image
                height = {300}
                width = {300}
                src = {url}
                alt = "cat"
            />
            <div>
                <h4>Name : {name}</h4>
                <h4>Origin : {origin}</h4>
                <h4>Description : {description}</h4>
            </div>
        </div>
    );
}
 
export default Profile;