import Image from "next/image";
import Link from "next/link";

interface CardProps {
    id : string,
    url : string
}

const Card = ({id,url} : CardProps) => {
    return (
        <Link href={`/${id}`}>
            <Image src={url} 
                   alt="image of a cat" 
                   width={300}
                   height={300}
                   style={{cursor:'pointer'}}
                   onClick={() => {console.log('redirect to other page')}}
            />
        </Link>
    );
}
 
export default Card;