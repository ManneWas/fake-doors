import DoorLink from './DoorLink.jsx'
import {doorsDb} from '../doors-db'

export default function () {
    return <div className={'w-2/3 flex flex-col min-h-full gap-y-4'}>
        {doorsDb.map(door => <DoorLink key={door.id} details={door}/>)}
    </div>
}


