import { Link, Head } from '@inertiajs/react'; 

export default function Homepage(props) {
    return (
        <div className='justify-center items-center min-h-screen bg-slate-50'>
            <Head title={props.title} />

            {props.news ? props.news.map((data, i) => {
                return (
                    <div key={i} className='p-4 m-2 bg-white text-black shadow-md rounded-md'>
                        <p className='text-2xl'>{data.title}</p>
                        <p className='text-sm'>{data.description}</p>
                        <i>{data.category}</i>
                        <i>{data.author}</i>
                    </div>
                )
            }) : <p>Belum Ada Berita</p>}
        </div>
    )
}