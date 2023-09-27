import { Link } from 'react-router-dom';
import './NavColumn.css';

interface NavColumnProps{
    navOptions: Array<String>;
}

export default function NavColumn({navOptions} : NavColumnProps) {
    return (
        <div id="navColumn">
            {navOptions.map(
                (e) => {
                    return (
                        <Link className="link" to={""}><span>{e}</span></Link>
                        )
                    
                }
            )}
        </div>
    )

}