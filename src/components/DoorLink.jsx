import {Link} from 'react-router-dom'
import ReactImage from '../assets/react.svg'

export default function ({details}) {
    return <Link to={`/catalogue/${details.id}`} className={'bg-slate-400 rounded-lg flex w-full h-16 mx-4'}>
        <img src={ReactImage} alt={'Image of a door'}/>
        <Info/>
    </Link>

    function Info() {
        return <div>
            <h3 className={'text-lg'}>{details.name}</h3>
            <div className={'flex gap-x-1'}>
                {details.categories.map(category => <Category key={category} details={category}/>)}
            </div>
        </div>
    }

    function Category({details}) {
        return <div className={'shrink text-sm bg-slate-800 text-white rounded py-0.5 px-2'}>
            {details}
        </div>
    }

}
