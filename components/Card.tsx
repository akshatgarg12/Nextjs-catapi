import Image from "next/image";
import Link from "next/link";
import CatCard from '../interfaces/CatCard'


const Card = ({id,url} : CatCard) => {
    return (
        <Link href={`/${id}`}>
            <Image src={url} 
                   alt="image of a cat" 
                   width={300}
                   height={300}
            />
        </Link>
    );
}
 
export default Card;