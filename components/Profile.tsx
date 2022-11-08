import Image from "next/image";
import styles from '../styles/Home.module.css'
const Profile = ({id, url, name, origin, description}:any) => {
    return (
        <div className={styles.container}>
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