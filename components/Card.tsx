import Image from "next/image";

interface CardProps {
    id : string,
    url : string
}

const Card = ({id,url} : CardProps) => {
    return (
        <div>
            <Image src={url} 
                   alt="image of a cat" 
                   width={300}
                   height={300}
                   style={{cursor:'pointer'}}
                   onClick={() => {console.log('redirect to other page')}}
            />
        </div>
    );
}
 
export default Card;